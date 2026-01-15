import fs from 'fs'
import path from 'path'
import { chromium } from 'playwright'

;(async () => {
  const urlCandidates = ['http://localhost:8080', 'http://localhost:8081']
  let browser
  try {
    browser = await chromium.launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } })

    let ok = false
    for (const url of urlCandidates) {
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 })
        // wait for main container
        await page.waitForSelector('div.min-h-screen', { timeout: 5000 })
        console.log('Loaded', url)
        ok = true
        break
      } catch (err) {
        // try next
      }
    }

    if (!ok) throw new Error('Could not reach dev server at ports 8080 or 8081')

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0.5in', bottom: '0.5in', left: '0.5in', right: '0.5in' },
    })

    const outPath = path.resolve(process.cwd(), 'output', 'proposal.pdf')
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, pdfBuffer)
    console.log('Saved PDF to', outPath)
  } catch (err) {
    console.error('Export failed:', err)
    process.exitCode = 2
  } finally {
    if (browser) await browser.close()
  }
})()
