import {test ,expect } from '@playwright/test'

const baseURL='https://sdetqa.vercel.app/autoplay'
test.describe('Data Entry Form Validation',()=>{

 test.beforeEach(async({page})=>{

      await page.goto(baseURL);
      await expect(page.getByText('AutoPlay')).toBeVisible();
 })

     // 1. Page Load Validation
 test('1.Page Load Validation',async({page})=>{
    // 1. Open the URL and verify the page loaded
    await expect(page).toHaveURL('https://sdetqa.vercel.app/autoplay')
    //2. Verify the AutoPlay heading is Visible .
    await expect(page.getByText('AutoPlay')).toBeVisible();
 })

 test('2. Input Fields Validation',async({page})=>{
      
    const nameField=page.getByLabel('Full name')
    const emailField=page.getByLabel('Email')
    const phoneField=page.getByLabel('Phone')
    const addressField=page.getByLabel('Address')
    
    //Full name should be visible and enabled 
    await expect(nameField).toBeVisible();
    await expect(nameField).toBeEnabled();

    //Verify 'maxlength' Attribute should be 15
    await expect(nameField).toHaveAttribute('maxlength','15')

    //Enter and verify full name value
    nameField.fill("Madhukar Pandey")
    await expect(nameField).toHaveValue("Madhukar Pandey") 
    
    //Email field should be visible and accept the value 
    await expect(emailField).toBeVisible();
    await emailField.fill("Madhukar123@gmail.com");
    await expect(emailField).toHaveValue("Madhukar123@gmail.com")

    
    //Phone field should be visible and accept the value 
    await expect(phoneField).toBeVisible();
    await phoneField.fill("999999999");
    await expect(phoneField).toHaveValue("999999999")

    //Address field should be visible and accept the multi-line text
    await expect(addressField).toBeVisible();
    await addressField.fill("Barola sec 49 \n Noida,India ");
    await expect(addressField).toHaveValue("Barola sec 49 \n Noida,India ")

    page.waitForTimeout(2000)

})


test('3.Radio Button Gender Validation',async({page})=>{

      const maleRadio=page.getByLabel('Male',{exact:true});
      const femaleRadio=page.getByLabel("Female",{exact:true});

      await expect(maleRadio).toBeVisible();
      await expect(femaleRadio).toBeVisible();
     
      //Select Female and verify
      await femaleRadio.check();
      await expect(femaleRadio).toBeChecked();
      await expect(maleRadio).not.toBeChecked();

    })
})
