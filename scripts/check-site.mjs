import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.BASE_URL ?? 'http://localhost:3666';
const output = process.env.QA_OUT ?? '.qa/launch-after';
const routes = ['/', '/events', '/events/asu-aep-solar-fab-tour-2026', '/about', '/partner', '/join', '/gallery', '/research', '/hackathon'];
const report = {base, pages:[], errors:[], warnings:[], localAnalyticsErrors:[], externalLinks:[], interactions:[]};
const destinations = new Set();
const browser = await chromium.launch();
await mkdir(output,{recursive:true});
try {
  for (const width of [390,768,1366,1920]) {
    const context = await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
    const page = await context.newPage();
    page.on('pageerror',e=>report.errors.push(e.message));
    page.on('console',msg=>{
      if(msg.type()==='error') {
        const entry = {text:msg.text(),url:msg.location().url};
        // Vercel serves this endpoint in deployment, but plain next start does not.
        // Keep the existing local failure visible in the report; fail all other errors.
        if(new URL(base).hostname === 'localhost' && entry.url?.endsWith('/_vercel/insights/script.js') && entry.text.includes('404')) report.localAnalyticsErrors.push(entry);
        else report.errors.push(entry);
      }
      if(msg.type()==='warning')report.warnings.push(msg.text());
    });
    for (const route of routes) {
      const response = await page.goto(base+route,{waitUntil:'networkidle'});
      assert.equal(response.status(),200,route);
      await page.evaluate(async()=>{
        for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,15));}
        window.scrollTo(0,0);
      });
      await page.waitForLoadState('networkidle');
      await page.evaluate(async()=>{
        await Promise.all([...document.images].map(async image=>{
          image.loading='eager';
          try { await image.decode(); } catch { /* Report failed images below. */ }
        }));
      });
      const result = await page.evaluate(()=>({
        title:document.title,
        h1:document.querySelectorAll('h1').length,
        overflow:document.documentElement.scrollWidth>innerWidth,
        brokenImages:[...document.images].filter(e=>!e.complete||!e.naturalWidth).map(e=>e.currentSrc),
        links:[...document.querySelectorAll('a[href]')].map(e=>e.getAttribute('href')),
        canonical:document.querySelector('link[rel="canonical"]')?.href,
        description:document.querySelector('meta[name="description"]')?.content,
        height:document.body.scrollHeight,
        upcomingY:document.querySelector('#upcoming')?.getBoundingClientRect().top,
      }));
      assert.equal(result.h1,1,`${route}: one h1`);
      assert.equal(result.overflow,false,`${route} at ${width}: horizontal overflow`);
      assert.deepEqual(result.brokenImages,[],`${route}: image load`);
      assert.ok(result.canonical && result.description,`${route}: metadata`);
      for (const href of result.links) destinations.add(new URL(href,base+route).href);
      delete result.links;
      report.pages.push({route,width,...result});
      await page.screenshot({path:`${output}/${route==='/'?'home':route.slice(1).replaceAll('/','-')}-${width}.png`,fullPage:true});
      console.log(`${width}px ${route}: passed`);
    }
    await context.close();
  }

  const page = await browser.newPage({viewport:{width:390,height:844}});
  for (const href of destinations) {
    const url=new URL(href);
    if(url.origin!==new URL(base).origin){if(url.protocol==='https:')report.externalLinks.push(href);continue;}
    const response=await page.goto(href,{waitUntil:'domcontentloaded'});
    // Fragment-only navigation has no HTTP response; still verify its destination.
    if (response) assert.equal(response.status(),200,href);
    if(url.hash) assert.ok(await page.evaluate(id=>!!document.getElementById(id),decodeURIComponent(url.hash.slice(1))),`Missing anchor: ${href}`);
  }
  for(const route of ['/sitemap.xml','/robots.txt'])assert.equal((await page.request.get(base+route)).status(),200);
  assert.equal((await page.request.get(base+'/does-not-exist-launch-check')).status(),404);
  assert.equal((await page.request.get(base+'/benchmarking',{maxRedirects:0})).status(),308);
  await page.goto(base,{waitUntil:'networkidle'});
  await page.keyboard.press('Tab');
  assert.match(await page.locator(':focus').innerText(),/Skip to content/);
  const toggle=page.getByRole('button',{name:'Menu',exact:true});
  await toggle.click();
  await page.keyboard.press('Shift+Tab');
  assert.match(await page.locator(':focus').innerText(),/^email$/i);
  await page.keyboard.press('Tab');
  assert.match(await page.locator(':focus').innerText(),/^close$/i);
  await page.keyboard.press('Escape');
  assert.equal(await toggle.getAttribute('aria-expanded'),'false');
  await toggle.click();
  await page.setViewportSize({width:1366,height:900});
  await page.waitForFunction(()=>document.body.style.overflow!=='hidden');
  await page.setViewportSize({width:768,height:900});
  await toggle.click();
  assert.equal(await page.locator('#mobile-nav').evaluate(e=>e.getBoundingClientRect().top),80);
  await page.keyboard.press('Escape');
  await page.setViewportSize({width:390,height:844});
  await page.goto(base+'/events',{waitUntil:'networkidle'});
  await toggle.click();
  await page.getByRole('navigation',{name:'Primary, mobile',exact:true}).getByRole('link',{name:/Events/}).click();
  assert.equal(await toggle.getAttribute('aria-expanded'),'false');
  await page.goto(base+'/gallery',{waitUntil:'networkidle'});
  const opener=page.locator('main li button').first();
  await opener.click();
  assert.ok(await page.getByRole('dialog').isVisible());
  await page.keyboard.press('ArrowRight');
  assert.match(await page.getByRole('dialog').innerText(),/02/);
  await page.screenshot({path:`${output}/lightbox-390.png`});
  await page.keyboard.press('Escape');
  assert.equal(await page.getByRole('dialog').count(),0);
  assert.ok(await opener.evaluate(e=>e===document.activeElement));
  report.interactions.push('skip link','menu focus loop + Escape','desktop resize unlock','tablet panel offset','same-route menu close','gallery arrows + Escape + focus return','internal links + fragments','404 + redirect + sitemap + robots');

  const noJS=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const noPage=await noJS.newPage();
  await noPage.goto(base);
  assert.equal(await noPage.locator('h1').evaluate(e=>getComputedStyle(e.parentElement).opacity),'1');
  await noJS.close();
  const failedJS=await browser.newContext();
  await failedJS.route('**/*.js',route=>route.abort());
  const failedPage=await failedJS.newPage();
  await failedPage.goto(base);
  assert.equal(await failedPage.locator('h1').evaluate(e=>getComputedStyle(e.parentElement).opacity),'1');
  await failedJS.close();
  report.interactions.push('content visible with JavaScript disabled and blocked hydration');
  assert.deepEqual(report.errors,[],'browser errors');
} finally {
  report.externalLinks=[...new Set(report.externalLinks)];
  report.warnings=[...new Set(report.warnings)];
  await writeFile(`${output}/report.json`,JSON.stringify(report,null,2));
  await browser.close();
}
console.log(`All route and interaction checks passed. Report: ${output}/report.json`);
