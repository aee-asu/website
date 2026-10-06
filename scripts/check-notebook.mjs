import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.BASE_URL ?? 'http://localhost:3670';
const output = process.env.QA_OUT ?? '.qa/notebook-details';
await mkdir(output,{recursive:true});
const browser = await chromium.launch();
const results = [];
try {
  for (const width of [390,768,1366,1920]) {
    const page = await browser.newPage({viewport:{width,height:844},reducedMotion:'reduce'});
    await page.goto(base,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    const brief = page.locator('[data-event-mode="upcoming"]');
    assert.equal(await brief.count(),1,'Home shows only the next event');
    const logistics = await brief.locator('dl').boundingBox();
    const date = await brief.locator('time').boundingBox();
    if(width===390){
      assert.ok(date.y<500,`Next date too low: ${date.y}`);
      assert.ok(logistics.y+logistics.height<844,'Next time/location visible within first phone screen');
    }
    const details = page.locator('details');
    assert.equal(await details.getAttribute('open'),null);
    await details.locator('summary').focus();
    await page.keyboard.press('Enter');
    assert.notEqual(await details.getAttribute('open'),null);
    assert.equal(await details.locator('li').count(),9,'All nine sourced stats retained');
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Expanded statistics overflow');
    await details.screenshot({path:`${output}/context-${width}.png`});
    await page.keyboard.press('Enter');
    const records = page.locator('[data-event-mode="past"]');
    const titles = await records.locator('h3').allTextContents();
    assert.equal(titles.length,new Set(titles).size,'No duplicate recent/selected story');
    await page.goto(base+'/events',{waitUntil:'networkidle'});
    for(const article of await page.locator('[data-event-mode="upcoming"]').all()){
      const box = await article.locator('dl').boundingBox();
      const body = await article.locator('h4').first().boundingBox();
      assert.ok(box.y+box.height<body.y,'Logistics must precede descriptions');
      assert.equal(await article.locator('img').count(),0,'No oversized upcoming photos');
    }
    assert.equal(await page.locator('#past-events a[href^="mailto:"]').count(),0,'No RSVP on past records');
    for(const img of await page.locator('main img').all()){
      await img.evaluate(async image=>{image.loading='eager';await image.decode();});
      const ratios=await img.evaluate(image=>({natural:image.naturalWidth/image.naturalHeight,rendered:image.getBoundingClientRect().width/image.getBoundingClientRect().height}));
      assert.ok(Math.abs(ratios.natural-ratios.rendered)<.01,'Photo should preserve original framing');
    }
    const headingLevels = await page.locator('main h1,main h2,main h3,main h4,main h5').evaluateAll(elements=>elements.map(e=>Number(e.tagName.slice(1))));
    for(let i=1;i<headingLevels.length;i++)assert.ok(headingLevels[i]<=headingLevels[i-1]+1,'Heading level skipped');
    await page.getByRole('link',{name:'Past events ↓',exact:true}).click();
    await page.waitForTimeout(100);
    const archive = await page.locator('#past-events').boundingBox();
    assert.ok(archive.y>=70 && archive.y<=130,'Anchor must clear sticky header');
    results.push({width,nextDateY:date.y,nextLogisticsBottom:logistics.y+logistics.height,checks:'passed'});
    await page.close();
  }
  // Native disclosures and event logistics remain useful with scripting disabled.
  const context = await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const page = await context.newPage();
  await page.goto(base);
  await page.locator('details summary').click();
  assert.notEqual(await page.locator('details').getAttribute('open'),null);
  await context.close();
} finally {
  await writeFile(`${output}/report.json`,JSON.stringify(results,null,2));
  await browser.close();
}
console.log(results);
