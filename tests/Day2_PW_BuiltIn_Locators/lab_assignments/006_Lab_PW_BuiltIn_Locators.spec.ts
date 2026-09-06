/*
1) Got to Url: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2) Enter user name and password ( Admin, admin123)
3) Click on login
4) Check Dashboard is visible after login

*/

import { test, expect,Locator} from "@playwright/test";

test('Verify Orange HRM login Page', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    let logo: Locator = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    await page.getByPlaceholder('Username').fill('Admin')
    
    await page.getByPlaceholder('Password').fill('admin123')
   
    await page.getByRole('button', { name: ' Login ' }).click()
    
    await expect(page.getByAltText('client brand banner')).toBeVisible()
   
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()

    await page.close()
    

})