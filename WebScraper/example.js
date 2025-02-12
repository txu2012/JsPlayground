// Requires Node and Puppeteer to be installed
import * as Scraper from "./webscraper.js"


const s = new Scraper.QuerySelectors();
s.list = ".col-xs-6.col-sm-4.col-md-3.col-lg-3";
s.href = "h3 > a";
s.name = "h1";
s.description = ".product_page > p";
s.price = ".price_color";
s.stock = ".instock";

/*
const books = new Scraper.PuppeteerScraper('http://books.toscrape.com/', s);
let items = await books.getListItemInformation();
console.log(items);
*/

const book1 = new Scraper.PuppeteerScraper('https://books.toscrape.com/catalogue/its-only-the-himalayas_981/index.html', s);
let item1 = await book1.itemStockChecker();
console.log(item1);