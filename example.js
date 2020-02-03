const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
  // screenshot
  // const browser = await puppeteer.launch()
  // const page = await browser.newPage()
  // await page.goto('https://www.example.com', { waitUntil: 'networkidle0' })
  // await page.screenshot({ path: 'example.png', fullPage: true })
  // await browser.close()

  // convert page tp PDF file
  // const browser = await puppeteer.launch()
  // const page = await browser.newPage()
  // await page.goto('https://www.example.com', { waitUntil: 'networkidle0' })
  // await page.pdf({ path: 'example.pdf', format: 'A4' })
  // await browser.close()

  // Emulating devices
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.emulate(devices['iPhone X'])
  await page.goto('https://pptr.dev')
  await page.waitFor(10000)
  await page.close()
})();