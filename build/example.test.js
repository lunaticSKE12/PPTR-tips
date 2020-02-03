'use strict';

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _homepage = require('./homepage');

var _homepage2 = _interopRequireDefault(_homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const puppeteer = require(puppeteer)
describe('Loads URL', function () {
  it('should work', async function () {
    var browser = await _puppeteer2.default.launch({ headless: false });
    var page = await browser.newPage();
    var homepage = new _homepage2.default(page);
    // await page.goto('http://zero.webappsecurity.com/index.html')
    await homepage.visit();
    await page.waitFor(5000);
    await browser.close();
  });
});