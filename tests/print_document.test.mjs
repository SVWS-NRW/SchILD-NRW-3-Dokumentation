import test from 'node:test'
import assert from 'node:assert/strict'
import { printDocument } from '../.vitepress/theme/print-document.mjs'

test('Druck wartet auf Bilder und akzeptiert sichtbare Bilder trotz abgelehntem decode', async () => {
  const image = new EventTarget()
  Object.assign(image, {
    complete: false, naturalWidth: 0, src: '/bild.png',
    getAttribute: () => 'lazy',
    setAttribute(name, value) { this[name] = value },
    decode: async () => { throw new Error('EncodingError') }
  })
  let printed = false
  const win = { document: { querySelectorAll: () => [image], fonts: { ready: Promise.resolve() } }, print: () => { printed = true } }
  const pending = printDocument(win)
  assert.equal(printed, false)
  image.complete = true; image.naturalWidth = 100; image.dispatchEvent(new Event('load'))
  await pending
  assert.equal(printed, true)
  assert.equal(image.loading, 'lazy')
  image.naturalWidth = 0; printed = false
  await assert.rejects(printDocument(win), /Bild fehlt/)
  assert.equal(printed, false)
  assert.equal(image.loading, 'lazy')
})
