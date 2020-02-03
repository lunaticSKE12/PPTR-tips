// const puppeteer = require(puppeteer)
import puppeteer from 'puppeteer'
import Homepage from './homepage'

describe('Loads URL', () => {
  it('should work', async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    const homepage = new Homepage(page)
    // await page.goto('http://zero.webappsecurity.com/index.html')
    await homepage.visit()
    await page.waitFor(5000)
    await browser.close()
  })
})