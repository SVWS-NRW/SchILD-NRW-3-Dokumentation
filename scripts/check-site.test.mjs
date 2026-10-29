import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import {tmpdir} from 'node:os'
import path from 'node:path'
import {checkSite} from './check-site.mjs'
test('Prüft relative und kodierte Links, Sprungmarken und fehlende Bilder', async () => {
 const root = await fs.mkdtemp(path.join(tmpdir(),'docs-links-'))
 try {
  await fs.writeFile(path.join(root,'index.html'),'<a href="/">Start</a><a href="ziel.html#gr%C3%BCn">Ziel</a><img src="bild.png">')
  await fs.writeFile(path.join(root,'ziel.html'),'<h1 id="grün">Ziel</h1><a href="index.html">Zurück</a>')
  await fs.writeFile(path.join(root,'bild.png'),'test')
  assert.deepEqual((await checkSite(root)).errors,[])
  await fs.appendFile(path.join(root,'index.html'),'<a href="ziel.html#fehlt">Fehlt</a><img src="fehlt.png"><a href="fehlt.html">Fehlt</a>')
  assert.equal((await checkSite(root)).errors.length,3)
 } finally {await fs.rm(root,{recursive:true,force:true})}
})

test('Prüft Links und Bilder unter dem offiziellen Veröffentlichungspfad', async () => {
 const root = await fs.mkdtemp(path.join(tmpdir(),'docs-base-'))
 try {
  await fs.writeFile(path.join(root,'index.html'),'<a href="/doku/ziel.html#gruen">Ziel</a><img src="/doku/bild.png">')
  await fs.writeFile(path.join(root,'ziel.html'),'<h1 id="gruen">Ziel</h1><a href="/doku/">Start</a>')
  await fs.writeFile(path.join(root,'bild.png'),'test')
  assert.deepEqual((await checkSite(root, '/doku/')).errors,[])
  await fs.appendFile(path.join(root,'index.html'),'<a href="/ziel.html">Falscher Stamm</a>')
  assert.equal((await checkSite(root, '/doku/')).errors.length,1)
 } finally {await fs.rm(root,{recursive:true,force:true})}
})
