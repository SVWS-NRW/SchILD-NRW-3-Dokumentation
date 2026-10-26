import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import { createMarkdownRenderer } from 'vitepress'
import { configureMarkdown } from '../.vitepress/markdown.mjs'

const root = new URL('../', import.meta.url)
const md = await createMarkdownRenderer(fileURLToPath(root), { config: configureMarkdown })

function assertNoNestedLinks(html) {
  let open = false
  for (const match of html.matchAll(/<\/?a\b[^>]*>/gi)) {
    if (/^<\//.test(match[0])) {
      assert.ok(open, 'Anchor closes without an opening tag')
      open = false
    } else {
      assert.ok(!open, 'Nested anchor: ' + match[0])
      open = true
    }
  }
  assert.equal(open, false, 'Anchor remains open')
}

for (const [path, href] of [
  ['administration/datenbanken/schild-nrw-daten-in-eine-andere-datenbank-uebertragen-migrieren-tutorial.md', 'https://localhost']
]) {
  test('Existing article renders without nested anchors: ' + path, async () => {
    const source = await readFile(new URL(path, root), 'utf8')
    const html = md.render(source, {})
    assertNoNestedLinks(html)
    assert.ok(html.includes(`href="${href}"`), 'Original destination is retained')
    assert.ok(html.includes(href + '</a>'), 'Visible URL is retained')
  })
}

test('Inline HTML anchors preserve attributes, emphasis and adjacent automatic links', () => {
  const html = md.render('*<a href="https://localhost" class="external free" rel="nofollow">https://localhost</a>* https://example.org/after\n\n<a href=\'https://example.org/one\'><strong>https://example.org/one</strong></a> https://example.org/two')
  assertNoNestedLinks(html)
  assert.ok(html.includes('<em><a href="https://localhost" class="external free" rel="nofollow">https://localhost</a></em>'))
  assert.ok(html.includes('href="https://example.org/after"'))
  assert.ok(html.includes('href="https://example.org/two"'))
})

test('Bare URLs, explicit Markdown links and email addresses remain linked', () => {
  const html = md.render('https://example.org/plain [Beschriftung](https://example.org/markdown) <https://example.org/auto> test@example.org')
  assertNoNestedLinks(html)
  for (const href of ['https://example.org/plain', 'https://example.org/markdown', 'https://example.org/auto', 'mailto:test@example.org']) {
    assert.ok(html.includes(`href="${href}"`), 'Link retained: ' + href)
  }
})

test('Code URLs and literal emoji punctuation remain unchanged', () => {
  const html = md.render('`https://localhost` ;)\n\n```text\nhttps://localhost\n```')
  assertNoNestedLinks(html)
  assert.ok(!html.includes('<a '))
  assert.ok(html.includes(';)'))
})
