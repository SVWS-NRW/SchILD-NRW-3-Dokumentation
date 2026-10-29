import assert from 'node:assert/strict'

const sections = ['einstieg', 'schild3', 'zeugnisse', 'reporting', 'programmreferenz', 'administration', 'hilfe']

// Disable just the added screen stylesheet rules to compare actual typography
// and spacing with the underlying theme, without maintaining copied CSS values.
async function assertOriginalTypography(page, print = false) {
  const result = await page.evaluate(() => {
    const rules = [...document.styleSheets].flatMap(sheet => [...sheet.cssRules])
      .filter(rule => rule.media && rule.cssText.includes('--schild-title-gradient'))
    const snapshot = () => [...document.querySelectorAll('.vp-doc h1, .vp-doc h2, .vp-doc h3, .vp-doc p, .vp-doc li, .vp-doc th, .vp-doc td')]
      .filter(element => !element.matches('p:has(> em:only-child)'))
      .map(element => {
        const style = getComputedStyle(element)
        return Object.fromEntries(['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'color', 'margin', 'padding'].map(key => [key, style[key]]))
      })
    const before = snapshot()
    const conditions = rules.map(rule => rule.media.mediaText)
    rules.forEach(rule => { rule.media.mediaText = 'not all' })
    const after = snapshot()
    rules.forEach((rule, i) => { rule.media.mediaText = conditions[i] })
    return { before, after, count: rules.length }
  })
  assert(result.count > 0, 'Akzent-Stylesheet muss für den Vergleich gefunden werden')
  assert.deepEqual(result.before, result.after, print ? 'Drucktypografie unverändert' : 'Artikeltypografie und Abstände unverändert')
}

export async function checkAccents(page, base) {
  await page.emulateMedia({ media: 'screen', forcedColors: 'none', reducedMotion: 'no-preference' })
  const originalDark = await page.evaluate(() => document.documentElement.classList.contains('dark'))
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 })
    for (const dark of [false, true]) {
      for (const route of ['/', ...sections.map(section => `/${section}/`)]) {
        assert((await page.goto(base + route)).ok())
        await page.evaluate(dark => document.documentElement.classList.toggle('dark', dark), dark)
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2), `Überlauf: ${route} ${width}`)
        assert.equal(await page.locator('.doc-context, .section-portal, .home-section-heading').count(), 0)
        if (route === '/') {
          assert.equal(await page.locator('a.VPFeature').count(), 7)
          assert.equal(await page.locator('.VPFeature .link-text').count(), 7)
          assert.equal(await page.locator('.VPFeature .icon, .VPHero .text').count(), 0)
          assert.equal(await page.getByRole('link', { name: 'Erste Schritte', exact: true }).count(), 1)
          assert(await page.locator('.VPHero .name.clip').evaluate(element => getComputedStyle(element).backgroundImage.includes('linear-gradient')))
        } else {
          assert.equal(await page.locator('.vp-doc ul.topic-links').count(), 0)
          await assertOriginalTypography(page)
        }
      }
    }
  }
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(base + '/')
  const card = page.locator('a.VPFeature').first()
  await card.focus()
  assert.equal(await card.evaluate(element => getComputedStyle(element).outlineStyle), 'solid')
  await card.hover()
  await page.waitForFunction(() => getComputedStyle(document.querySelector('a.VPFeature')).transform === 'matrix(1, 0, 0, 1, 0, -2)')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  assert.equal(await card.evaluate(element => getComputedStyle(element).transform), 'none')
  await page.emulateMedia({ forcedColors: 'active' })
  assert.notEqual(await page.locator('.VPHero .name.clip').evaluate(element => getComputedStyle(element).webkitTextFillColor), 'rgba(0, 0, 0, 0)')
  await page.emulateMedia({ forcedColors: 'none', reducedMotion: 'no-preference' })
  const touchContext = await page.context().browser().newContext({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 900 } })
  try {
    const touchPage = await touchContext.newPage()
    await touchPage.goto(base + '/')
    await touchPage.locator('a.VPFeature').first().hover()
    assert.equal(await touchPage.locator('a.VPFeature').first().evaluate(element => getComputedStyle(element).transform), 'none')
    assert.equal(await touchPage.locator('.link-text-icon').first().evaluate(element => getComputedStyle(element).transform), 'none')
  } finally { await touchContext.close() }
  await page.goto(base + '/hilfe/markdown-und-gestaltung.html')
  await assertOriginalTypography(page)
  await page.emulateMedia({ media: 'print' })
  await assertOriginalTypography(page, true)
  await page.emulateMedia({ media: 'screen' })
  await page.evaluate(dark => document.documentElement.classList.toggle('dark', dark), originalDark)
}
