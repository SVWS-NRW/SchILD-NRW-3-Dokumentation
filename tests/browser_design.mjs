import assert from 'node:assert/strict'
import { sections } from '../.vitepress/theme/sections.mjs'

export async function checkDesign(page, base) {
  await page.emulateMedia({ media: 'screen', reducedMotion: 'no-preference', forcedColors: 'none' })
  const originalDark = await page.evaluate(() => document.documentElement.classList.contains('dark'))
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 })
    for (const dark of [false, true]) {
      for (const route of ['/', ...sections.map(section => `/${section.path}/`)]) {
        const response = await page.goto(base + route)
        assert(response.ok())
        await page.evaluate(dark => {
          // Finish the theme toggle before evaluating geometry and focus.
          document.documentElement.classList.toggle('dark', dark)
        }, dark)
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2), `Überlauf: ${route}, ${width}px`)
        if (route === '/') {
          assert.equal(await page.locator('.VPFeature .icon svg').count(), 7)
          assert(await page.getByRole('heading', { name: 'Wobei brauchen Sie Unterstützung?' }).isVisible())
        } else {
          assert.equal(await page.locator('.section-portal').count(), 1)
          assert(await page.locator('.topic-links > li > a').count() > 0)
          assert(await page.locator('.doc-context').isVisible())
        }
      }
    }
  }
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(base + '/reporting/')
  const card = page.locator('.topic-links a').first()
  await card.focus()
  assert.equal(await card.evaluate(element => getComputedStyle(element).outlineStyle), 'solid')
  await card.hover()
  await page.waitForFunction(() => getComputedStyle(document.querySelector('.topic-links a')).transform === 'matrix(1, 0, 0, 1, 0, -2)')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  assert.equal(await card.evaluate(element => getComputedStyle(element).transform), 'none')
  await page.emulateMedia({ media: 'print' })
  assert.equal(await page.locator('.doc-context').evaluate(element => getComputedStyle(element).display), 'none')
  assert.notEqual(await card.evaluate(element => getComputedStyle(element).display), 'flex')
  await page.emulateMedia({ media: 'screen', forcedColors: 'active' })
  await page.goto(base + '/')
  assert.notEqual(await page.locator('.VPHero .name.clip').evaluate(element => getComputedStyle(element).webkitTextFillColor), 'rgba(0, 0, 0, 0)')
  await page.emulateMedia({ forcedColors: 'none', reducedMotion: 'no-preference' })
  await page.evaluate(dark => document.documentElement.classList.toggle('dark', dark), originalDark)
}
