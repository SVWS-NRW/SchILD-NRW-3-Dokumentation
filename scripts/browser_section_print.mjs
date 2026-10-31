import { siteBase } from '../.vitepress/site-base.mjs'
const prefix = siteBase.slice(0, -1)
import assert from 'node:assert/strict'

export async function checkSectionPrint(page) {
  const base = new URL(page.url()).origin + prefix
  await page.context().addInitScript(() => { window.print = () => { window.printCalls = (window.printCalls || 0) + 1 } })
  await page.goto(base + '/zeugnisse/', { waitUntil: 'networkidle' })
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 })
    for (const colorScheme of ['light', 'dark']) {
      await page.emulateMedia({ colorScheme })
      await page.evaluate(dark => document.documentElement.classList.toggle('dark', dark), colorScheme === 'dark')
      const icon = page.locator('button.article-print-icon')
      assert(await icon.isVisible())
      const box = await icon.boundingBox()
      assert.equal(box.width, box.height)
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2))
    }
  }
  await page.locator('button.article-print-icon').click()
  await page.waitForFunction(() => window.printCalls === 1)
  await page.setViewportSize({ width: 1440, height: 900 })
  const printLink = page.locator('#VPSidebarNav').getByRole('link', { name: 'Druckansicht', exact: true })
  assert.equal(await printLink.getAttribute('href'), prefix + '/druck/zeugnisse.html')
  const labels = await page.locator('#VPSidebarNav a').allTextContents()
  assert.equal(labels[1].trim(), 'Druckansicht')
  await page.evaluate(() => { window.printCalls = 0 })
  await printLink.click()
  await page.waitForURL('**/druck/zeugnisse.html')
  const book = page
  book.setDefaultTimeout(60000)
  await book.locator('.book-toolbar button').waitFor()
  assert.equal(await book.evaluate(() => window.printCalls || 0), 0)
  assert.equal(await book.locator('.book-toolbar button').isEnabled(), true)
  await book.locator('.book-toolbar button').click()
  await book.waitForFunction(() => window.printCalls === 1)
  assert(await book.locator('.VPSidebar').isVisible())
  assert.equal(await book.getByRole('link', { name: 'Zur Rubrik Zeugnisse und Abschlüsse', exact: true }).count(), 0)
  assert.equal(await book.locator('button.article-print-icon').count(), 0)
  await book.emulateMedia({ media: 'print' })
  assert(await book.locator('.VPSidebar').evaluate(e => getComputedStyle(e).display === 'none'))
  await book.emulateMedia({ media: 'screen' })
  await book.locator('.print-source').waitFor({ state: 'detached' })
  assert.equal(await book.locator('.book-article').count(), 106)
  assert.equal(await book.locator('.book-toc a').count(), 106)
  assert.deepEqual(await book.evaluate(() => {
    const ids = [...document.querySelectorAll('[id]')].map(e => e.id)
    return ids.filter((id, i) => ids.indexOf(id) !== i)
  }), [])
  assert.deepEqual(await book.locator('.section-print-book a[href^="#"]').evaluateAll(links =>
    links.map(a => decodeURIComponent(a.hash.slice(1))).filter(id => !document.getElementById(id))
  ), [])
  assert(await book.locator('.vp-doc img').evaluateAll(images => images.every(img => img.complete && img.naturalWidth > 0)))
  for (const width of [390, 1440]) {
    await book.setViewportSize({ width, height: 900 })
    assert(await book.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2))
  }
  await book.locator('.book-toolbar button').click()
  await book.waitForFunction(() => window.printCalls === 2)

  await page.goto(base + '/zeugnisse/vorbereitung.html', { waitUntil: 'networkidle' })
  await page.locator('button.article-print-icon').waitFor()
  await page.locator('.vp-doc a[href*="bemerkungen-aktuelles-halbjahr"]').first().click()
  await page.locator('.vp-doc h1 button.article-print-icon').waitFor()
  assert.equal(await page.locator('button.article-print-icon').count(), 1)
  await page.locator('button.article-print-icon').click()
  await page.waitForFunction(() => window.printCalls === 1)
  await page.goto(base + '/einstieg/', { waitUntil: 'networkidle' })
  await page.locator('button.article-print-icon').waitFor()
  assert.equal(await page.locator('.section-print-offer').count(), 0)
  for (const slug of ['einstieg', 'schild3', 'reporting', 'administration', 'hilfe', 'programmreferenz']) {
    await page.goto(base + '/' + slug + '/', { waitUntil: 'networkidle' })
    await page.locator('button.article-print-icon').waitFor()
    if (slug === 'programmreferenz') assert(await page.locator('.vp-doc h2').filter({ hasText: 'SchILD-NRW 3 Karteireiter' }).isVisible())
    const menu = page.locator('.VPSidebar')
    const link = menu.getByRole('link', { name: 'Druckansicht', exact: true })
    assert.equal(await link.getAttribute('href'), prefix + '/druck/' + slug + '.html')
    await link.click()
    await page.waitForURL('**/druck/' + slug + '.html')
    await page.locator('.book-toolbar button').waitFor()
    assert.equal(await page.evaluate(() => window.printCalls || 0), 0)
    assert(await menu.isVisible())
    assert.equal(await page.locator('button.article-print-icon').count(), 0)
    assert(await page.locator('.book-article').count() > 1)
    assert.deepEqual(await page.locator('.section-print-book a[href^="#"]').evaluateAll(links => links.map(a => decodeURIComponent(a.hash.slice(1))).filter(id => !document.getElementById(id))), [])
    assert(!await page.locator('.section-print-book').innerText().then(text => text.includes('{{ article')))
    await page.emulateMedia({ media: 'print' })
    assert(await menu.evaluate(e => getComputedStyle(e).display === 'none'))
    await page.emulateMedia({ media: 'screen' })
    await page.locator('.print-source').waitFor({ state: 'detached' })
  }
}
