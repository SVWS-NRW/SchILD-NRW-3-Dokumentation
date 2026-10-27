import test from 'node:test'
import assert from 'node:assert/strict'
import { createMarkdownRenderer, disposeMdItInstance } from 'vitepress'
import { configureOverviewLinks } from '../.vitepress/overview-links.mjs'
const md = await createMarkdownRenderer(process.cwd(), { config: configureOverviewLinks })

test('Übersichtskarten bewahren Linktexte und Ziele, auch mit Hervorhebungen', () => {
  const html = md.render('- [**Erste Schritte**](/einstieg/)\n- [Reporting](/reporting/)')
  assert.match(html, /<ul class="topic-links">/)
  assert.match(html, /href="\/einstieg\/">\s*<strong>Erste Schritte<\/strong>/)
  assert.match(html, /href="\/reporting\/">Reporting<\/a>/)
})

test('Anweisungen, gemischte und verschachtelte Listen werden nicht zu Karten', () => {
  for (const source of [
    '- Öffnen Sie [Reporting](/reporting/).\n- Drucken Sie den Report.',
    '- [Reporting](/reporting/) mit Erklärung.\n- [Einstieg](/einstieg/)',
    '- [Reporting](/reporting/) und [Einstieg](/einstieg/)',
    '- [Reporting](/reporting/)\n  - Ein Unterpunkt',
    '1. [Reporting](/reporting/)\n2. [Einstieg](/einstieg/)'
  ]) assert.doesNotMatch(md.render(source), /class="topic-links"/)
})

test.after(() => disposeMdItInstance())
