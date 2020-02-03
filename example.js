const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
  // Incognito
  const browser = await puppeteer.launch({ headless: false })
  const context = await browser.createIncognitoBrowserContext()
  const page = await context.newPage()

  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.waitFor(5000)

  await browser.close()
})();