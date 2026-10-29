import { siteBase } from '../.vitepress/site-base.mjs'
const prefix = siteBase.slice(0, -1)
import {spawn} from 'node:child_process'
import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import {isolateVideoEmbeds} from './browser_test_embeds.mjs'
import {checkPrintLayout} from './browser_print.mjs'
import {checkSectionPrint} from './browser_section_print.mjs'
import {checkAccents} from './browser_accents.mjs'
const {chromium} = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const base = 'http://127.0.0.1:4189' + prefix
const server = spawn(process.execPath,['node_modules/vitepress/bin/vitepress.js','preview','--host','127.0.0.1','--port','4189'],{stdio:'ignore'})
let browser, page
const errors=[]
try {
 let ready=false
 for(let n=0;n<100;n++){try{if((await fetch(base)).ok){ready=true;break}}catch{}await new Promise(r=>setTimeout(r,100))}
 assert(ready,'Vorschau startet nicht')
 browser=await chromium.launch({headless:true,...(process.env.QA_BROWSER?{executablePath:process.env.QA_BROWSER}:{})})
 const context=await browser.newContext()
 await isolateVideoEmbeds(context)
 page=await context.newPage()
 page.setDefaultTimeout(15000)
 page.setDefaultNavigationTimeout(20000)
 page.on('pageerror',e=>errors.push(e.message))
 async function goto(route){const r=await page.goto(base+route,{waitUntil:'networkidle'});assert(r.ok());await page.locator('.vp-doc h1').waitFor()}
 async function openMenu(width){if(width<960){await page.locator('.VPLocalNav .menu').click();await page.locator('.VPSidebar.open').waitFor()}}
 for(const width of [1440,390]) {
  await page.setViewportSize({width,height:900})
  await goto('/einstieg/')
  await openMenu(width)
  const overview=page.locator('#VPSidebarNav').getByRole('link',{name:'Übersicht',exact:true})
  assert(await overview.isVisible())
  await page.locator(`#VPSidebarNav a[href="${prefix}/einstieg/grundlagen.html"]`).click()
  await page.waitForURL('**/einstieg/grundlagen.html')
  if(width<960)await page.locator('.VPSidebar.open').waitFor({state:'detached'})
  await goto('/hilfe/')
  await openMenu(width)
  const helpMenu=page.locator('#VPSidebarNav')
  const helpLinks=await helpMenu.locator('a').evaluateAll(es=>es.map(e=>({text:e.textContent.trim(),href:e.getAttribute('href')})))
  await helpMenu.getByRole('link',{name:'Bilderkatalog',exact:true}).click()
  await page.waitForURL('**/bilder/')
  await page.waitForFunction(prefix=>document.querySelector('.vp-doc h1')?.textContent.includes('Bilderkatalog'))
  await page.waitForFunction(prefix=>document.querySelector(`#VPSidebarNav a[href="${prefix}/bilder/"]`)?.closest('.VPSidebarItem').classList.contains('is-active'), prefix)
  assert.deepEqual(await helpMenu.locator('a').evaluateAll(es=>es.map(e=>({text:e.textContent.trim(),href:e.getAttribute('href')}))),helpLinks)
  assert(await page.locator(`.VPNavBarMenu a[href="${prefix}/hilfe/"]`).evaluate(e=>e.classList.contains('active')))
  if(width<960)await page.locator('.VPSidebar.open').waitFor({state:'detached'})
  await page.reload({waitUntil:'networkidle'})
  await openMenu(width)
  assert.deepEqual(await helpMenu.locator('a').evaluateAll(es=>es.map(e=>({text:e.textContent.trim(),href:e.getAttribute('href')}))),helpLinks)
  assert(await helpMenu.getByRole('link',{name:'Übersicht',exact:true}).isVisible())
  await helpMenu.getByRole('link',{name:'Übersicht',exact:true}).click()
  await page.waitForURL('**/hilfe/')
  await goto('/schild3/schueler/daten-gemaess-loeschfristen-loeschen-verwaltung-werkzeuge.html')
  const picture=page.locator(`.vp-doc img[src="${prefix}/bilder/schueler/verwaltung-werkzeuge-loeschfristen-1-programmstart.png"]`)
  assert.equal(await picture.getAttribute('alt'),'Anfrage beim Programmstart, auf Löschfristen zu prüfen.')
  assert.equal(await picture.getAttribute('loading'),'lazy')
  assert.equal(await picture.locator('..').getAttribute('href'),await picture.getAttribute('src'))
  await picture.scrollIntoViewIfNeeded();await picture.evaluate(async image=>{await image.decode()})
  const caption=picture.locator('xpath=ancestor::p[1]/following-sibling::p[1]')
  assert.equal(await caption.innerText(),'Anfrage beim Programmstart, auf Löschfristen zu prüfen.')
  assert(await caption.locator(':scope > em').evaluate(e=>parseFloat(getComputedStyle(e).fontSize)<parseFloat(getComputedStyle(document.querySelector('.vp-doc')).fontSize)))
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2))
  await goto('/programmreferenz/')
  await openMenu(width)
  assert.equal(await page.locator('.program-reference-menu a.reference-active').innerText(),'Übersicht')
  await page.locator('.program-reference-menu').getByRole('link',{name:'Lehrkräfte',exact:true}).click()
  await page.waitForURL('**/programmreferenz/lehrkraefte.html')
  await openMenu(width)
  await page.locator('.program-reference-menu').getByRole('link',{name:'Basisdaten',exact:true}).click()
  await page.waitForURL('**/*referenz=*')
  await page.waitForFunction(prefix=>document.querySelector('.program-reference-menu a.reference-active')?.textContent==='Basisdaten')
  const next=page.locator('.VPDocFooter a.next')
  const href=await next.getAttribute('href')
  await next.click()
  await page.waitForURL(new URL(href,base).href)
  await page.locator('.program-reference-menu a.reference-active').waitFor()
  await goto('/schild3/import-export-statistik/schnittstellenbeschreibung.html')
  assert.equal(await page.locator('.vp-doc table').count(),40)
  const table=page.locator('.interface-table-scroll').first()
  assert.equal(await table.getAttribute('tabindex'),'0')
  assert(await table.evaluate(e=>e.scrollWidth>0))
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'Seite läuft horizontal über')
 }
 await page.setViewportSize({width:1440,height:900})
 await goto('/reporting/serienbriefe/basisreportsammlung-serienbrief-nichtversetzung.html')
 for (const extension of ['ods','xlsx']) {
  const filename = `schulform-jahrgang-nichtversetzte-matrix.${extension}`
  const link = page.locator(`.vp-doc a[href="${prefix}/dateien/serienbriefe/${filename}"]`)
  assert.equal(await link.count(),1)
  const downloadPromise = page.waitForEvent('download')
  await link.click()
  const download = await downloadPromise
  assert.equal(download.suggestedFilename(),filename)
  await download.cancel()
  assert(page.url().endsWith('/reporting/serienbriefe/basisreportsammlung-serienbrief-nichtversetzung.html'))
 }
 await goto('/reporting/rap.html')
 await page.keyboard.press('Control+k')
 const input=page.locator('input[type="search"]')
 await input.waitFor();await input.fill('ZeugnisParameter')
 const result=page.locator('.VPLocalSearchBox a[href*="/reporting/rap/zeugnisparameter"]').first()
 await result.waitFor();await result.click()
 await page.waitForURL('**/reporting/rap/zeugnisparameter.html*')
 await page.waitForFunction(prefix=>document.querySelector('.vp-doc h1')?.textContent.includes('ZeugnisParameter'))
 await goto('/hilfe/alle-artikel.html')
 assert(await page.locator('ol.article-index a').count()>400)
 await checkPrintLayout(page)
 await checkSectionPrint(page)
 await checkAccents(page, base)
 assert.deepEqual(errors,[])
 console.log('OK: Rubrikdruck mit 106 Artikeln, Drucksymbol, Drucklayout und Zustandswiederherstellung, ODS-/XLSX-Downloads aus Markdown, Markdown-Bilder mit Originalverweis und Bildunterschrift, Themenmenü, Bilderkatalog mit unverändertem Hilfemenü und Neuladen, Programmreferenz, Weiterblättern, Tabellen bei 390/1440 Pixeln, Suche und Artikelindex.')
} catch(error) {
 await fs.mkdir('test-results',{recursive:true})
 await page?.screenshot({path:'test-results/browser-fehler.png',fullPage:true}).catch(()=>{})
 throw error
} finally {await browser?.close();server.kill()}
