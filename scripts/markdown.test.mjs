import test from 'node:test'
import assert from 'node:assert/strict'
import { createMarkdownRenderer, disposeMdItInstance } from 'vitepress'
import { configureMarkdown, containerLabels } from '../.vitepress/markdown.mjs'
const md = await createMarkdownRenderer(process.cwd(), {config:configureMarkdown,container:containerLabels})
test('Hinweisboxen und verschachtelte Details behalten Inhalt und Icons', () => {
  for (const type of ['info','tip','warning','danger','example','details']) {
    const html = md.render(`::: ${type}\n\nInhalt\n\n:::`)
    assert.ok(html.includes('Inhalt'))
    assert.ok(html.includes('data-icon='))
  }
  assert.match(md.render(':::: details Mehr\n\n::: tip\n\nInhalt\n\n:::\n\n::::'), /details custom-block/)
})
test('Feldtabellen erhalten zentrale Spaltenbreiten und einen bedienbaren Scrollbereich', () => {
 const html = md.render('## Adressen.dat\n\n| Spalte | Beschreibung | Header-Text | Datentyp | Darf leer sein? | Bemerkung |\n| --- | --- | --- | --- | --- | --- |\n| 1 | Art | Art | Text | J | |')
 assert.match(html, /tabindex="0" role="region" aria-label="Feldbeschreibung: Adressen.dat"/)
 assert.match(html, /class="interface-fields"/)
 assert.match(html, /field-remarks/)
 assert.equal((html.match(/<td/g)||[]).length,6)
 assert.ok(!md.render('| A | B |\n| --- | --- |\n| 1 | 2 |').includes('interface-fields'))
})

test('Wörtliche Platzhalter und Sonderzeichen in Markdown-Tabellen bleiben sichtbar', () => {
 const html = md.render(String.raw`| Platzhalter | Wert |
| --- | --- |
| $Titel$ | \{leer\} |
| Kennung | \*\*\* |
`)
 assert.ok(html.includes('{leer}'))
 assert.ok(html.includes('***'))
})

test('Markdown-Bilder behalten Originalverweis, Sonderzeichen und formatierte Unterschriften', () => {
 const source = String.raw`[![Header\_Footer, \*\*\* und C:\\Reports](/bilder/test.png)](/bilder/test.png)` + '\n\n*Die **Datei** `Zeugniseinstellungen.ini` bleibt erhalten.*'
 const html = md.render(source)
 assert.ok(html.includes(String.raw`alt="Header_Footer, *** und C:\Reports"`))
 assert.match(html, /<a href="\/bilder\/test\.png"><img /)
 assert.match(html, /<em>Die <strong>Datei<\/strong> <code>Zeugniseinstellungen\.ini<\/code> bleibt erhalten\.<\/em>/)
 assert.equal((html.match(/<img /g)||[]).length,1)
 assert.equal((html.match(/<a /g)||[]).length,1)
})

test('Download-Attribute behalten den Veröffentlichungspfad', async () => {
 disposeMdItInstance()
 const prefixed = await createMarkdownRenderer(process.cwd(), { config: md => configureMarkdown(md, '/doku/') }, '/doku/')
 const html = prefixed.render('[Datei](/dateien/test.xlsx){download}')
 assert.match(html, /href="\/doku\/dateien\/test.xlsx"/)
 assert.match(html, /download/)
})
