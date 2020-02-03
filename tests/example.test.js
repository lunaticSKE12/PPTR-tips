// const puppeteer = require(puppeteer)
import puppeteer from 'puppeteer'

describe('Loads URL', () => {
  it('should work', async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.waitFor(5000)
    await browser.close()
  })
})