import assert from 'node:assert/strict'
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { runInNewContext } from 'node:vm'
import { createSidebar } from '../.vitepress/sidebar.mjs'
import { compactSiteData, packJson, verifyBuiltHtml } from '../.vitepress/site-data.mjs'

test('Packed site data preserves all real navigation values and ordering', () => {
  const navigation = JSON.parse(readFileSync(new URL('../.vitepress/navigation.json', import.meta.url)))
  const data = { lang: 'de-DE', themeConfig: { nav: navigation.nav, sidebar: createSidebar(navigation) } }
  const packed = packJson(data)
  assert.equal(JSON.stringify(runInNewContext(packed)), JSON.stringify(data))
  assert(packed.length < JSON.stringify(data).length / 4, 'Repeated menus must not be embedded once per route')
})

test('Quotes, script endings, Unicode and special object keys remain data', () => {
  const data = JSON.parse('{"__proto__":{"text":"</script><script>broken()</script>"},"constructor":"quoted \\\"text\\\"","items":["äöü 🏫","\\u2028\\u2029",null,true,0,-1]}')
  const packed = packJson(data)
  assert(!packed.includes('</script>'))
  assert(!packed.includes('\u2028') && !packed.includes('\u2029'))
  assert.equal(JSON.stringify(runInNewContext(packed)), JSON.stringify(data))
})

test('HTML transformation changes only the site-data assignment and is repeatable', () => {
  const shared = Array.from({ length: 30 }, () => ({ text: 'Ein langer Menüpunkt', items: [{ text: 'Artikel', link: '/article' }] }))
  const data = { themeConfig: { sidebar: shared } }
  const html = '<p>Unveränderter Artikel</p><script>window.__VP_HASH_MAP__={};window.__VP_SITE_DATA__=JSON.parse(' + JSON.stringify(JSON.stringify(data)) + ');</script>'
  const result = compactSiteData(html)
  assert.equal(result, compactSiteData(html))
  assert(result.startsWith('<p>Unveränderter Artikel</p><script>window.__VP_HASH_MAP__={};'))
  const context = { window: {} }
  runInNewContext(result.match(/<script>([\s\S]+)<\/script>/)[1], context)
  assert.equal(JSON.stringify(context.window.__VP_SITE_DATA__), JSON.stringify(data))
  assert.equal(compactSiteData('<p>Kein Konfigurationsskript</p>'), '<p>Kein Konfigurationsskript</p>')
})

test('Build validation rejects empty or incomplete HTML and respects rewrites', () => {
  const outDir = mkdtempSync(join(tmpdir(), 'schild-html-check-'))
  const config = { outDir, pages: ['article.md'], rewrites: { map: { 'article.md': 'renamed.md' } } }
  const complete = '<!doctype html><html lang="de"><body>Inhalt</body></html>\n'
  try {
    writeFileSync(join(outDir, '404.html'), complete)
    writeFileSync(join(outDir, 'renamed.html'), '')
    assert.throws(() => verifyBuiltHtml(config), /Incomplete VitePress HTML output: renamed.html/)
    writeFileSync(join(outDir, 'renamed.html'), '<html><body>Unvollständig')
    assert.throws(() => verifyBuiltHtml(config), /Incomplete VitePress HTML output/)
    writeFileSync(join(outDir, 'renamed.html'), complete)
    assert.doesNotThrow(() => verifyBuiltHtml(config))
  } finally {
    rmSync(outDir, { recursive: true, force: true })
  }
})

test('Image catalogue keeps the Help menu and highlights Help in the main navigation', () => {
  const navigation = JSON.parse(readFileSync(new URL('../.vitepress/navigation.json', import.meta.url)))
  const sidebar = createSidebar(navigation)
  assert.deepEqual(sidebar['/bilder/'], sidebar['/hilfe/'])
  assert(sidebar['/bilder/'][0].items.some(item => item.link === '/bilder/' && item.text === 'Bilderkatalog'))
  const help = navigation.nav.find(item => item.link === '/hilfe/')
  const active = new RegExp(help.activeMatch)
  assert(active.test('/bilder/'))
  assert(active.test('/hilfe/bedienung.html'))
  assert(!active.test('/reporting/'))
})
