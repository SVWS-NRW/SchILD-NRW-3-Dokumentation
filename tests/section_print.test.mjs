import test from 'node:test'
import assert from 'node:assert/strict'
import { printNavigation } from '../.vitepress/section-print-loader.mjs'
import { createSidebar } from '../.vitepress/sidebar.mjs'
import { readFile } from 'node:fs/promises'
import { canonicalArticle, sectionPrintEntries, sectionArticleHtml } from '../.vitepress/section-print.mjs'

test('Rubrikdruck folgt dem Menü, übernimmt externe Rubrikpfade und vermeidet Doppelungen', () => {
  const navigation = { sidebar: { '/zeugnisse/': [{ items: [{ link: '/zeugnisse/', text: 'Übersicht' }, { link: '/zeugnisse/druck', items: [{ link: '/reporting/zeugnisse?referenz=1' }, { link: '/reporting/zeugnisse.html' }] }] }] } }
  const entries = sectionPrintEntries(navigation, '/zeugnisse/')
  assert.deepEqual(entries.map(entry => entry.path), ['zeugnisse/index.md', 'zeugnisse/druck.md', 'reporting/zeugnisse.md'])
  assert.equal(new Set(entries.map(entry => entry.id)).size, 3)
})

test('Zusammengeführte Artikel behalten eindeutige Sprungmarken und korrekte Links unter einem Unterpfad', () => {
  const entries = [{ key: '/zeugnisse/a', url: '/zeugnisse/a.html', id: 'artikel-1' }, { key: '/zeugnisse/b', url: '/zeugnisse/b.html', id: 'artikel-2' }]
  const entry = { ...entries[0], html: '<h1 id="anfang">Titel</h1><a href="#anfang">Hier</a><a href="/zeugnisse/b.html#ende">Weiter</a><a href="/andere.html">Extern im Buch</a><img src="/bilder/test.png"><a href="https://example.org">Web</a>' }
  const html = sectionArticleHtml(entry, entries, '/doku/')
  assert.match(html, /<h2 id="artikel-1-anfang">/)
  assert.match(html, /href="#artikel-1-anfang"/)
  assert.match(html, /href="#artikel-2-ende"/)
  assert.match(html, /href="\/doku\/andere.html"/)
  assert.match(html, /src="\/doku\/bilder\/test.png"/)
  assert.match(html, /href="https:\/\/example.org"/)
  assert.equal(canonicalArticle('/doku/zeugnisse/index.html', '/doku/'), '/zeugnisse')
})

test('Die Zeugnisrubrik enthält ausschließlich vorhandene eindeutige Artikelquellen', async () => {
  const navigation = JSON.parse(await readFile(new URL('../.vitepress/navigation.json', import.meta.url), 'utf8'))
  const entries = sectionPrintEntries(navigation, '/zeugnisse/')
  assert(entries.length > 100)
  for (const entry of entries) assert((await readFile(new URL('../' + entry.path, import.meta.url), 'utf8')).length > 0)
})

test('Druckansicht gehört zum Zeugnis-Menü, ohne sich selbst in die Anleitung aufzunehmen', async () => {
  const navigation = JSON.parse(await readFile(new URL('../.vitepress/navigation.json', import.meta.url), 'utf8'))
  const sidebar = createSidebar(navigation)
  assert.deepEqual(sidebar['/druck/zeugnisse.md'], sidebar['/zeugnisse/'])
  assert.equal(sidebar['/druck/zeugnisse.md'][0].items[1].link, '/druck/zeugnisse.html')
  assert(!sectionPrintEntries(navigation, '/zeugnisse/').some(entry => entry.path.startsWith('druck/')))
})

test('Alle Rubriken haben Druckmenü und vorhandene eindeutige Artikel in Menüfolge', async () => {
  const navigation = JSON.parse(await readFile(new URL('../.vitepress/navigation.json', import.meta.url), 'utf8'))
  const menus = printNavigation()
  for (const section of Object.keys(navigation.sidebar)) {
    const slug = section.slice(1, -1)
    assert.equal(navigation.sidebar[section][0].items[1].link, `/druck/${slug}.html`)
    assert.deepEqual(menus.sidebar[`/druck/${slug}.md`], createSidebar(navigation)[section])
    const entries = sectionPrintEntries(menus, section)
    assert(entries.length > 1)
    assert.equal(new Set(entries.map(entry => entry.key)).size, entries.length)
    for (const entry of entries) assert((await readFile(new URL('../' + entry.path, import.meta.url), 'utf8')).length > 0)
    assert(!entries.some(entry => entry.path.startsWith('druck/')))
  }
  assert(sectionPrintEntries(menus, '/programmreferenz/').length > 100)
})
