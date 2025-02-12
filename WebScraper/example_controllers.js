import * as Scraper from "./webscraper.js"

const s1 = new Scraper.QuerySelectors();
s1.list = ".col.s12.m4";
s1.name = ".card-content > h3";
s1.price = "#price";
s1.description = "#section1b > div > div > div";
s1.stock = ".col.s12.m6 > div > div > div > div > form > h4";
s1.href = ".card-image > a";

const yuan_scraper = new Scraper.PuppeteerScraper('https://yuancon.store/controller', s1);
var items = await yuan_scraper.getListItemInformation();
console.log(items);

const s2 = new Scraper.QuerySelectors();
s2.list = ".fixed-layout.multicolumns-list.table-width > li";
s2.name = ".mainbox-title";
s2.price = ".price";
s2.description = "#content_description";
s2.stock = ".product-fields-group > div > div > span";
s2.href = ".product-title";

const gamo2 = new Scraper.PuppeteerScraper('https://www.gamo2.com/en/index.php?dispatch=categories.view&category_id=254', s2);
var items = await gamo2.getListItemInformation();
console.log(items);