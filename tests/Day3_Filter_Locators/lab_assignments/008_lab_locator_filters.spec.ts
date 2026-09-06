
/* ======================================================
    Playwright Locator Filters 

    1.Verify "Add to cart" for Product 2   
    2.Count items not having "Out of stock"
    3.Find items with "In stock"
    4.Verify elements using data-testid
    5.Count all elements with test ids
    6.Find "Say goodbye" button for John
    7.Find "Say hello" button for Mary
    8.Find "Subscribe" buttons using multiple conditions
    9.Find "details" buttons for done tasks
    10.Verify stock status counts

======================================================*/

// ======================================================
// Playwright Locator Filters Practice (Beginner Version)
// ======================================================





import { test, expect } from '@playwright/test'


// Hooks - Runs before each test
test.beforeEach(async ({ page }) => {
    await page.goto('https://sdetqa.vercel.app/filters_practice.html')
})


// Runs after each test
test.afterAll(async ({ page }) => {

    await page.close()
})

// ======================================================
// Filter using hasText
// ======================================================

test('1.Verify "Add to cart" for Product 2', async ({ page }) => {
    /*
    1. Open the page
    2. Locate "Product 2"
    3. Find "Add to cart" button
    */

    const addToCartButton = page
            .getByRole('listitem')
             .filter({ hasText: 'Product 2' })
            .getByRole('button', { name: 'Add to cart' });
    //verify button is visible 
    await expect(addToCartButton).toBeVisible();
    //verify button is click action
    await addToCartButton.click();

})


// ======================================================
// Filter using hasNotText
// ======================================================

test('2.Count items not having "Out of stock"', async ({ page }) => {

    // Go to second card and get list items that do NOT contain "Out of stock"

    const inStockItems = page.locator('.card').nth(1)
        .getByRole('listitem')
        .filter({ hasNotText: 'Out of stock' });

    // Verify count (expected: 3)
    await expect(inStockItems).toHaveCount(3)


})


test('3.Find items with "In stock"', async ({ page }) => {

    // Find all items containing "In stock"
    const inStockItems = page
        .getByRole('listitem')
        .filter({ hasText: 'In stock' });

    await expect(inStockItems).toHaveCount(3);
});


test('4.Find items with "Out of Stock"', async ({ page }) => {

    // Find all items containing "Out of Stock"
    const outStockItems = page
        .getByRole('listitem')
        .filter({ hasText: 'Out of stock' });

    await expect(outStockItems).toHaveCount(2);
});


test('5.Verify elements using data-testid', async ({ page }) => {

    // Locate elements using test id
    const apple = page.getByTestId('apple');
    const banana = page.getByTestId('banana');
    const orange = page.getByTestId('orange');

    // Verify visibility
    await expect(apple).toBeVisible();
    await expect(banana).toBeVisible();
    await expect(orange).toBeVisible();

    // Verify text content
    await expect(apple).toContainText('apple');
    await expect(banana).toContainText('banana');
    await expect(orange).toContainText('orange');
});


test('6.Count all elements with test ids', async ({ page }) => {

    // Get all elements having data-testid
    const testIdElements = page.locator('[data-testid]');

    // Access different positions
    const firstElement = testIdElements.first();
    const lastElement = testIdElements.last();
    const fourthElement = testIdElements.nth(3);

    console.log("Fruits......", await firstElement.innerText(), await lastElement.innerText(), await fourthElement.innerText());

    //verify count

    await expect(testIdElements).toHaveCount(5)

});


// ======================================================
// Chaining filters
// ======================================================

test('7.Find "Say goodbye" button for John', async ({ page }) => {

    // Find "John" → then find "Say goodbye" button inside it
    const goodbyeButton = page
        .getByRole('listitem')
        .filter({ hasText: 'John' })
        .getByRole('button', { name: 'Say goodbye' });

    await expect(goodbyeButton).toBeVisible();
    await expect(goodbyeButton).toHaveText('Say goodbye');
});


test('8.Find "Say hello" button for Mary', async ({ page }) => {

    // Find "Mary" → then find "Say hello" button inside it
    const helloButton = page
        .getByRole('listitem')
        .filter({ hasText: 'Mary' })
        .getByRole('button', { name: 'Say hello' });

    await expect(helloButton).toBeVisible();
    await expect(helloButton).toHaveText('Say hello');
});

test('9.Count "Say hello" buttons for John', async ({ page }) => {

    // Find "John" → then find "Say goodbye" button inside it
    const SayhelloButton = page
        .getByRole('listitem')
        .filter({ hasText: 'John' })
        .getByRole('button', { name: 'Say hello' });

    await expect(SayhelloButton).toBeVisible();
    await expect(SayhelloButton).toHaveText('Say hello');
    await expect(SayhelloButton).toHaveCount(1);
});

test('10.Count "Say goodbye" buttons for Mary', async ({ page }) => {

    const maryGoodbyeButtons = page
        .getByRole('listitem')
        .filter({ hasText: 'Mary' })
        .getByRole('button', { name: 'Say goodbye' });

    await expect(maryGoodbyeButtons).toHaveCount(1);
});

test('11.Count all buttons for John', async ({ page }) => {

    // Find "John" → then find "Say goodbye" button inside it
    const JohnButton = page
        .getByRole('listitem')
        .filter({ hasText: 'John' })
        .getByRole('button');

    //await expect(JohnButton).toBeVisible();
    await expect(JohnButton).toHaveCount(2)
});


// ======================================================
// Matching multiple locators using .and()
// ======================================================

test('12.Find "Subscribe" buttons using multiple conditions', async ({ page }) => {
    //Find buttons that are both role="button" and have title "Subscribe

    const subscribeButtons = page
        .getByRole('button')
        .and(page.getByTitle('Subscribe', { exact: true }));

    console.log("Subscribe buttons count:", await subscribeButtons.count());

    await expect(subscribeButtons).toHaveCount(2);
    await expect(subscribeButtons.first()).toBeVisible();
    await expect(subscribeButtons.nth(1)).toBeVisible();
});


test('13.Find "Unsubscribe" button using .and()', async ({ page }) => {

    const unsubscribeButton = page
        .getByRole('button')
        .and(page.getByTitle('Unsubscribe', { exact: true }));

    await expect(unsubscribeButton).toHaveCount(1);
    await expect(unsubscribeButton).toHaveText('📭 Unsubscribe');
    
});

// ======================================================
// Combo Filters (Multiple Conditions)
// ======================================================

test('14.Find "details" buttons for done tasks', async ({ page }) => {

    const doneTaskDetails = page
        .getByRole('listitem')
        .filter({ hasText: 'done' })
        .getByRole('button', { name: 'details' });

    await expect(doneTaskDetails).toHaveCount(2);
});


test('15.Find "details" button for pending tasks', async ({ page }) => {

    const pendingTaskDetails = page
        .getByRole('listitem')
        .filter({ hasText: 'pending' })
        .getByRole('button', { name: 'details' });

    await expect(pendingTaskDetails).toHaveCount(1);
});


test('16.Count tasks with "done" status', async ({ page }) => {

    const doneTasks = page
        .getByRole('listitem')
        .filter({ hasText: 'done' });

    await expect(doneTasks).toHaveCount(2);
});


test('17.Find tasks not marked "done"', async ({ page }) => {

    const notDoneTasks = page
        .locator('.card').nth(5)
        .getByRole('listitem')
        .filter({ hasNotText: 'done' });

    await expect(notDoneTasks).toHaveCount(2);
});

// ======================================================
// Combined Scenario
// ======================================================

test('18.Find specific product and verify its button', async ({ page }) => {

    const product2Button = page
        .getByRole('listitem')
        .filter({ hasText: 'Product 2' })
        .getByRole('button');

    await expect(product2Button).toBeVisible();
    await expect(product2Button).toHaveText('Add to cart');
});


test('19.Verify stock status counts', async ({ page }) => {

    const inStock = page
        .getByRole('listitem')
        .filter({ hasText: 'In stock' });

    const outOfStock = page
        .getByRole('listitem')
        .filter({ hasText: 'Out of stock' });

    await expect(inStock).toHaveCount(3);
    await expect(outOfStock).toHaveCount(2);
});

