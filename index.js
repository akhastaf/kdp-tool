const puppeteer = require('puppeteer');
const CREDS = require('./creds');
arguments = [1, 2, 3];
(async () => {
    const browser = await puppeteer.launch({headless: false, defaultViewPort : null});
    const page = await browser.newPage();
    const loginPageSelector = '#signinButton-announce';
    const loginSelector = '#signInSubmit';
    await page.setViewport(
        {
            width: 1300,
            height: 1300,
            deviceScaleFactor: 1
        });
    await page.goto('https://kdp.amazon.com/');
    await page.click(loginPageSelector);
    await page.waitFor(2000);
    await page.waitFor('#ap_email');
    await page.type('#ap_email', CREDS.username);
    await page.waitFor('#ap_password');
    await page.type('#ap_password', CREDS.password);
    await page.click(loginSelector);
    await page.waitFor('#create-paperback-button-announce');
    await page.click("#create-paperback-button-announce");
    await page.screenshot({path: 'kdp.png'});
    await page.waitFor(4000);
    await page.type('#data-print-book-title', "title for test");
    await page.type('#data-print-book-subtitle', "subtitle");
    await page.type('#data-print-book-series-title', "serie info");
    await page.type('#data-print-book-series-number', "456");
    await page.type('#data-print-book-primary-author-prefix', "abderrazzaq");
    await page.type('#data-print-book-primary-author-first-name', "khastaf");
    await page.type('#data-print-book-primary-author-middle-name', "kh");
    await page.type('#data-print-book-primary-author-last-name', "khastaf");
    await page.type('#data-print-book-description', "description");
    await page.click('#non-public-domain');
    await page.type('#data-print-book-keywords-0', "test 0");
    await page.type('#data-print-book-keywords-1', "test 1");
    await page.type('#data-print-book-keywords-2', "test 2");
    await page.type('#data-print-book-keywords-3', "test 3");
    await page.type('#data-print-book-keywords-4', "test 4");
    await page.type('#data-print-book-keywords-5', "test 5");
    await page.type('#data-print-book-keywords-6', "test 6");
    // Categories
    await page.click('#data-print-book-categories-button-proto-announce');
    await page.waitFor(2000);
    await page.click('#div-fiction a');
    await page.waitFor(5000);
    await page.click('#checkbox-fiction_general');
    await page.click('#category-chooser-ok-button-announce');
    // End Category
    await page.waitFor(2000);
    await page.click('input[name="data[print_book][is_adult_content]-radio"]');
    await page.click('#save-and-continue-announce');
    await page.waitFor(5000);
    await page.click('#free-print-isbn-btn-announce');
    await page.waitFor(2000);
    await page.click('#print-isbn-confirm-button-announce');
    // Print options
        // Interior and paper type
        await page.click('#a-autoid-0-announce'); //Black and white interior with cream paper
        // await page.click('#a-autoid-1-announce'); //Black and white interior with white paper
        // await page.click('#a-autoid-2-announce'); //Black and white interior with cream paper
        await page.waitFor(2000);
        // Time size
        await page.click('#trim-size-btn-announce');
        await page.waitFor(2000);
        // await page.click('#trim-size-popular-option-0-0-announce'); //5 x 8
        // await page.click('#trim-size-popular-option-0-1-announce'); //5.25 x 8
        // await page.click('#trim-size-popular-option-0-2-announce'); //5.5 x 8.5
        await page.click('#trim-size-popular-option-0-3-announce'); //6 x 9
        await page.waitFor(2000);
        // Bleed Settings
        await page.click('#a-autoid-3-announce'); // No bleed
        // await page.click('#a-autoid-4-announce'); // Bleed PDF only
        // Paperback cover finish
        await page.click('#a-autoid-5-announce'); // Matte
        // await page.click('#a-autoid-6-announce'); // Glossy
        await page.waitFor(2000);
    // Manuscript
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click('#data-print-book-publisher-interior-file-upload-browse-button-announce')
            //page.$eval('#data-print-book-publisher-interior-file-upload-browse-button-announce', elem => elem.click())
        ]);
        await fileChooser.accept(['/Users/akhastaf/Downloads/interior.pdf']);





    //await browser.close();
})();