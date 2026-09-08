

/* Lab: 
============
App URL : https://demowebshop.tricentis.com/

Test 1: Open Application
Test 2: Verify Logo Visibility
Test 3: Find Products Containing "computer"
Test 4: Print Product Details - first, nth & last
Test 5: Find Products Starting with "/build"
Test 6: Verify Register Link visible
Test 7: Verify Last Social Media Link - should be 'Google+'
Test 8: Verify Second Social Media Link - should be 'Twitter'

*/

import {test, expect } from '@playwright/test';

test.describe('CSS_Locator_Lab_Practice', () => {

    const URL = 'https://demowebshop.tricentis.com/'

    test.beforeEach('Opening Web Application', async ({ page }) => {
        await page.goto(URL);
    })

    test.afterEach('Closing Web Application', async ({ page }) => {

        await page.close();

    })

    test('Test 1: Open Application', async ({ page }) => {



        await expect(page).toHaveURL(URL);

    })


   test('Test 2: Verify Logo Visibility', async ({ page }) => {
        
        const logo= page.locator("img[alt='Tricentis Demo Web Shop']")
        await expect(logo).toBeVisible();

    })

 
   test('Test 3: Find Products Containing "computer"', async ({ page }) => {
        
        const products= page.locator("h2 > a[href*='computer']")
        await expect(products).toHaveCount(4);

    })


      test('Test 4: Print Product Details - first, nth & last', async ({ page }) => {
        
        const products= page.locator("h2 > a[href*='computer']")
        
        console.log("First product details :",await products.first().innerText())
        console.log("second product details :",await products.nth(1).innerText())
        console.log("last product details :",await products.last().innerText())

    })

    test('Test 5: Find Products Starting with "/build"', async ({ page }) => {
        
        const products= page.locator("h2 > a[href^='/build']")
        
        await expect(products).toHaveCount(3);

    })


    test('Test 6: Verify Register Link visible', async ({ page }) => {
        
        const registerLink= page.locator("li > a[href='/register']")
        
        await expect(registerLink).toBeVisible();
        await registerLink.click();

    })

    test("Test 7: Verify Last Social Media Link - should be 'Google+'", async ({ page }) => {
        
        const googleLink= page.locator("a[href*='plus.google.com']")
        
        await expect(googleLink).toBeVisible();
        await googleLink.click();

    })

    test("Test 8: Verify Second Social Media Link - should be 'Twitter'", async ({ page }) => {
        
        const TwitterLink= page.locator(".follow-us > ul > li:nth-child(2)")
        
        await expect(TwitterLink).toBeVisible();
        await TwitterLink.click();

    })



});



