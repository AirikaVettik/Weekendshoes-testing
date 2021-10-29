const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
    
    //Build browser and maximizing window
    const driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize(); 

    //fetch domain and find title
    await driver.get("https://www.weekendshoes.ee");     
    const title = await driver.getTitle();
    console.log('1. Title is:',title);

    //open page
    await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");
    console.log('2. Opening Women Boots page https://www.weekendshoes.ee/naistele/saapad.html');
    
    //add product to wishlist from the page
    const product = await driver.findElement(By.xpath('//*[@id="amasty-shopby-product-list"]/div[3]/ol/li[4]/div/div[3]/div/div/a'));
    driver.executeScript('arguments[0].click();', product);
    console.log('3. Adding product to wishlist.');

    //open wishlist menu
    await driver.sleep(5000);
    await driver.findElement(By.id('wishlist-link')).click();
    console.log('4. Clicking on wishlist.');

    //open wishlist
    await driver.findElement(By.xpath('//*[@id="miniwishlist-content-wrapper"]/div/div/div/button')).click();
    console.log('5. Open wishlist.');

    //open product
    const wishlistProduct = await driver.findElement(By.className('product-item-link'));
    driver.executeScript('arguments[0].click();', wishlistProduct);
    console.log('6. Open product')

    //open drop-down menu
    await driver.sleep(2000);
    await driver.findElement(By.className('selectric')).click();
    console.log('7. Open drop')

    //pick drop-down value
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[4]/div[2]')).click();
    console.log('8. Pick a size');

    //add product to cart
    await driver.sleep(2000);
    await driver.findElement(By.css('#product-addtocart-button')).click();
    console.log('9. Add product to cart')

    //open cart
    await driver.manage().setTimeouts( { implicit: 5000 } );
    const cart = await driver.findElement(By.xpath('//*[@id="minicart-content-wrapper"]/div[2]/div[4]/div/a'));
    driver.executeScript('arguments[0].click();', cart);
    console.log('10. Open cart.');

    //product quantity +1
    await driver.sleep(7000);
    await driver.findElement(By.className('action qty increase-qty increase-item-qty-btn')).click();
    console.log('11. Product quantity +1');

    //delete products from cart
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="shopping-cart-table"]/tbody/tr[1]/td[6]/a')).click();
    console.log('12. Remove all products from cart.')

    await driver.sleep(5000);
    await driver.get("https://www.weekendshoes.ee"); 

    //searching "Jope"
    await driver.sleep(2000);
    const searchingWord = "Jope";
    await driver.findElement(By.id("search")).sendKeys(searchingWord, Key.RETURN);
    console.log("13. Searching Jope...");

    //sorts by popularity
    await driver.sleep(5000);
    await driver.findElement(By.css('#sorter [value="bestsellers"]')).click();
    console.log(chalk.green('14. Sorted by popularity'));
}
 
example()

