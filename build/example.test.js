'use strict';

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _homepage = require('./homepage');

var _homepage2 = _interopRequireDefault(_homepage);

var _mochaSteps = require('mocha-steps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocha steps test', function () {
  var browser = void 0;
  var page = void 0;

  before(async function () {
    browser = await _puppeteer2.default.launch({ headless: false });
    page = await browser.newPage();
    await page.setDefaultTimeout(7000);
  });

  after(async function () {
    await browser.close();
  });

  (0, _mochaSteps.step)('should load homepage', async function () {
    var homepage = new _homepage2.default(page);
    await homepage.visit();
  });

  (0, _mochaSteps.step)('step 2', async function () {
    await page.waitForSelector('#FAIL');
  });

  (0, _mochaSteps.step)('step 3', async function () {
    await page.waitForSelector('#FAIL');
  });
}); // const puppeteer = require(puppeteer)