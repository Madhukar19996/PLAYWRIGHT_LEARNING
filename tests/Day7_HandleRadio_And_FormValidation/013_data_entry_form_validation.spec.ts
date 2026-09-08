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
   
   // 4. Checkboxes validation
   test.only('4. Checkboxes validation',async({page})=>{
       
    const sundayCheckbox=page.getByLabel('Sun');
   // await sundayCheckbox.check() // check checkbox
   // sundayCheckbox.setChecked(true) //  true - check , false - uncheck

   //Select  the checkboxes (Mon Sun)
    const allDays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    //With map
    const allCheckboxes=allDays.map((day)=>{

        return page.getByLabel(day)
    })
   
    /*
    for(const checkbox of allCheckboxes){
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
   */
  

    //without using map (prefer loop)
   
    /*
    for(const day of allDays){
      const checkbox=page.getByLabel(day)
      await checkbox.check()
      await expect(checkbox).toBeChecked();
    }

   //Uncheck Fri,Sat,Sun and Verify

    for(const day of ['Fri','Sat','Sun']){
      const checkbox=page.getByLabel(day)
      await checkbox.uncheck()
      await expect(checkbox).not.toBeChecked();
    }
  */
    //Toggle all checkboxes	Checked → unchecked, unchecked → checked
    
    /*
    for(const day of allDays){
      const checkbox=page.getByLabel(day)
      if(await checkbox.isChecked())
        {
         await checkbox.uncheck()
         await expect(checkbox).not.toBeChecked();
        }
        else
        {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
      
        */

        //Select checkboxes using index (1, 3, 6 → Mon, Wed, Sat)	
        // Only those indexes should be checked

        /*
        const indexes=[1,3,6,]
        
        for(const i of indexes)
        {
           await allCheckboxes[i].check();
           await expect(allCheckboxes[i]).toBeChecked();

        }
    */
        //Select checkbox with label "Fri"	Friday checkbox should be checked

        const fridayCheckbox=page.getByLabel('Fri')

        await fridayCheckbox.check();
        await expect(fridayCheckbox).toBeChecked();
    })
 
    //5. Submit Button Validation
    test("5. Submit Button Validation",async({page})=>{
        const submitButton=page.getByRole('button',{name:'Submit'}).first(); //capture first submit button
        
        //visibility
        await expect(submitButton).toBeVisible();

        //click on submit button
        await submitButton.click();

        //enabled/click-able
        await expect(submitButton).toBeEnabled()



    })

    //6. Additional (Recommended) Test Cases (Field level functional test)

     test("6. Field Level Functional Validation",async({page})=>{

    const nameField=page.getByLabel('Full name')
    const emailField=page.getByLabel('Email')
    const phoneField=page.getByLabel('Phone')
    const addressField=page.getByLabel('Address')
    const submitButton=page.getByRole('button',{name:'Submit'}).first();
    const errorMessage=page.locator('#formErrors')

    await nameField.fill('');
    await emailField.fill('');
    await phoneField.fill('');
    await addressField.fill('');

    await submitButton.click();

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Please fix the following:');
       

    })


    //Enter invalid email format --> Error should be shown

     test("Enter invalid email format",async({page})=>{

    
    const emailField=page.getByLabel('Email')
    
    
    const submitButton=page.getByRole('button',{name:'Submit'}).first();
    const errorMessage=page.locator('#formErrors')

   
    await emailField.fill('madhukar.com'); //invalid characters 
    

    await submitButton.click();

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Please enter a valid email address.');
       

    })
    


})
