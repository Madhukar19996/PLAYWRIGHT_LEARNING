// Playwright Built-in Locators Practice 

import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {

    await page.goto('https://sdetqa.vercel.app/pw-locators-practice-app');

})

test.afterAll(async ({ page }) => {

    await page.close();
})



// 1) getByRole() - Find by semantic role and accessible name
/* Role locators include buttons, checkboxes, headings, links, lists, tables, 
 and many more and follow W3C specifications for ARIA role.
 Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.
*/

test('Verify Playwright getByRole() Locators on HTML Page', async ({ page }) => {

    const username = page.getByRole("textbox", { name: 'Username:' })

    await expect(username).toBeVisible()
    await expect(username).toBeEditable()
    await username.fill('Madhukar Pnadey')
    await page.waitForTimeout(3000)

    const toggleButton = page.getByRole('button', { name: 'Toggle Button' })
    await expect(toggleButton).toBeVisible()
    await toggleButton.click()

    const checkBox = page.getByRole('checkbox', { name: 'Accept terms' })
    await expect(checkBox).toBeVisible()
    await checkBox.click()
    await page.waitForTimeout(1000)

    /*
    const homeLink=page.getByRole("link", {name: 'Home'})
    await homeLink.click()
    await page.waitForTimeout(1000)
   */

    //await page.getByRole("link", {name: 'Home'}).click(); // This is matching with multiple elements. so cannot perfoem click. You need to take the first matched element.
    await page.getByRole("link", { name: 'Home' }).first().click();



})

// 2. page.getByText() to locate by text content (non interactive element)

test('Verify Playwright getByText() Locators on HTML Page', async ({ page }) => {

    await expect(page.getByText('getByText()')).toBeVisible()
    await expect(page.getByText('colored text')).toBeVisible()
    await expect(page.getByText('List item 1')).toBeVisible()
    await expect(page.getByText('List item 2 with ')).toBeVisible()
    await (page.getByText('Submit Form')).click()
    await page.waitForTimeout(1000)

})

//3. page.getByLabel() to locate a form control by associated label's text.

test('Verify Playwright getByLabel() Locators on HTML Page', async ({ page }) => {

    await page.getByLabel('Email Address:').fill("test123@gmail.com")
    await page.waitForTimeout(1000)
    await page.getByLabel('Password:').fill("test123")
    await page.waitForTimeout(1000)
    await page.getByLabel('Your Age:').fill("30")
    await page.waitForTimeout(1000)
    await page.getByLabel(' Standard').uncheck()

})


//4. page.getByPlaceholder() to locate an input by placeholder.

test('Verify Playwright getByPlaceholder() Locators on HTML Page', async ({ page }) => {

    await page.getByPlaceholder('Enter your full name').fill("Madhukar Pandey")
    await page.waitForTimeout(1000)
    await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill("9999999999")
    await page.waitForTimeout(1000)
    await page.getByPlaceholder('Type your message here...').fill("I'm Learning Playwright with TS")
    await page.waitForTimeout(1000)
    await page.getByText('Search').click()

})

// 5.page.getByAltText() to locate an element, usually image, by its text alternative. 

test('Verify Playwright getByAltText() Locators on HTML Page', async ({ page }) => {

    await expect(page.getByAltText('logo image')).toBeVisible()

})

// 6. page.getByTitle() to locate an element by its title attribute.
test('Verify Playwright getByTitle() Locators on HTML Page', async ({ page }) => {

    await expect(page.getByTitle('Home page link')).toHaveText('Home')
    await page.waitForTimeout(1000)
    await expect(page.getByTitle('HyperText Markup Language')).toContainText('HTM')
    await page.waitForTimeout(1000)
    await expect(page.getByTitle('Click to save your changes')).toContainText('Save')
    await page.waitForTimeout(1000)

})

// 7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured)
test('Verify Playwright getByTestId() Locators on HTML Page', async ({ page }) => {

    await expect(page.getByTestId('profile-name')).toHaveText('John Doe')
    await page.waitForTimeout(1000)
    await expect(page.getByTestId('profile-email')).toContainText('john.doe@')
    await page.waitForTimeout(1000)
    await page.getByTestId('edit-profile-btn').click()
    await page.waitForTimeout(1000)
    await expect(page.getByTestId('nav-products')).toContainText('Prod')
    await page.waitForTimeout(1000)
})