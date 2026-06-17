// Generate project-card preview images:
//  - 9 upcoming flagships → screenshot their design mockups (docs/portfolio-designs/*.html)
//  - AnimationLand + Guía TPACK → screenshot their live sites
import { createRequire } from 'module';
import { pathToFileURL } from 'url';
import { resolve } from 'path';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PW_PATH);

const OUT = 'public/img/projects';
const DESIGNS = '../docs/portfolio-designs';

const mockups = [
  ['03-civicdesk.html', 'civicdesk'],
  ['06-pulseboard.html', 'pulseboard'],
  ['07-teamflow.html', 'teamflow'],
  ['08-nesthunt.html', 'nesthunt'],
  ['09-learnloop.html', 'learnloop'],
  ['10-chatsphere.html', 'chatsphere'],
  ['12-sensorscope.html', 'sensorscope'],
  ['13-tastytable.html', 'tastytable'],
  ['14-cryptovault.html', 'cryptovault'],
];

const live = [
  ['https://luisgxz.github.io/AnimationLand-Demo-/', 'animationland'],
  ['https://luisgxz.github.io/guia-tpack/', 'guia-tpack'],
];

const browser = await chromium.launch();
// 1.6:1 card ratio, 2x for crisp retina
const ctx = await browser.newContext({ viewport: { width: 1200, height: 750 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

for (const [file, slug] of mockups) {
  const url = pathToFileURL(resolve(DESIGNS, file)).href;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
  } catch {
    await page.goto(url, { waitUntil: 'load', timeout: 20000 });
  }
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/${slug}.png`, clip: { x: 0, y: 0, width: 1200, height: 750 } });
  console.log('mockup →', slug);
}

for (const [url, slug] of live) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 25000 });
  } catch {
    await page.goto(url, { waitUntil: 'load', timeout: 25000 });
  }
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/${slug}.png`, clip: { x: 0, y: 0, width: 1200, height: 750 } });
  console.log('live →', slug);
}

await browser.close();
console.log('done');
