const puppeeteer = require('puppeteer-firefox');

(async () => {
  const browser = await puppeeteer.launch({ headless: false })
  const page = await browser.newPage();

  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.waitForSelector("#signin_button")
  await page.waitFor(10000)

  await browser.close()
})()