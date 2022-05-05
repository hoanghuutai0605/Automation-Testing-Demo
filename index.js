const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://vi.wikipedia.org/wiki/Coronavirus');
  await page.screenshot({path: 'corona.png'});
    const result = await page.evaluate(() =>{
        let headingWeb = document.querySelectorAll('.toctext');
        const headingList = [...headingWeb]
        return headingList.map( h => h.innerHTML)
    })
    console.log(result);
  await browser.close();
})();