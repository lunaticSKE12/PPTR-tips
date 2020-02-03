const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
  // Accessibility Test
  // const browser = await puppeteer.launch({ headless: false })
  // const page = await browser.newPage()

  // await page.goto('https://pptr.dev')
  // await page.waitForSelector('title')

  // const snapshot = await page.accessibility.snapshot()
  // console.log(snapshot)
  // await browser.close()

  // Accessibility Test
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://pptr.dev')
  await page.waitForSelector('title')

  // Execute Navigation API within the page context
  const metrics = await page.evaluate(() => JSON.stringify(window.performance))
  console.log(JSON.parse(metrics))
  await browser.close()
})();