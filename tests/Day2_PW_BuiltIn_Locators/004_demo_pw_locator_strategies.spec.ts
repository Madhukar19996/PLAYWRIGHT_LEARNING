import {test,expect, Locator} from '@playwright/test'


test("Playwright locators",async({page})=>{

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app.html")

// 1) getByRole() - Find by semantic role and accessible name
    /* Role locators include buttons, checkboxes, headings, links, lists, tables, 
     and many more and follow W3C specifications for ARIA role.
     Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.
    */

     const projectsLink:Locator=page.getByRole('link',{name:'Projects'})
     await expect(projectsLink).toBeVisible()

     const signInButton:Locator=page.getByRole('button',{name:'Sign In'})
     await expect(signInButton).toBeVisible()
     await signInButton.click()


// 2) getByText() - Match visible text content on the page
   // Use this locator to find non-interactive elements like div, span, p, etc. 
  // For interactive elements like button, a, input, etc. use role locators.

  const welcomeText=page.getByText('Welcome, John! 👋') //Exaxct match --> exact string
  //await expect(welcomeText).toBeVisible() 

  //const welcomeText=page.getByText('Welcome, John! 👋',{exact:true}) //Exact match --> default
  //await expect(welcomeText).toBeVisible() 

  //const welcomeText=page.getByText('Welcome, John! 👋',{exact:false}) //{exact:false} --> error
  await expect(welcomeText).toBeVisible() 

 // 3) getByLabel() - Locate a form field using its label text
  // When to use: Ideal for form fields with visible labels.


  const firstNameField=page.getByLabel('First Name')
  await expect(firstNameField).toBeVisible()
  await firstNameField.fill('Madhukar Pandey')


  // 4) getByPlaceholder() - Locate an input by placeholder text
  // Best for inputs without a label but having a placeholder
  
  const searchBoxField=page.getByPlaceholder('Search tests...')
  await expect(searchBoxField).toBeVisible()
  await searchBoxField.fill("Max Book")

// 5) getByAltText() - Locate an image by its alt attribute text
  //identifies images (and similar elements) based on the alt attribute.
  // Use this locator when your element supports alt text such as img and area elements.  

  expect(page.getByAltText('Playwright logo')).toBeVisible


  // 6) getByTitle() - Locate an element using its title attribute
  // When to use: When your element has a meaningful title attribute.  

  const totalRunsBox=page.getByTitle('Total test runs')
  await expect(totalRunsBox).toBeVisible()
  await expect(totalRunsBox).toHaveText('4,821Total Runs')
  await expect(totalRunsBox).toContainText('4,821')

 // 7) getByTestId() - Locate elements using the data-testid attribute
  //Locate an element based on its data-testid attribute (other attributes can be configured)
  // When to use: When text or role-based locators are unstable or not suitable.

  const proPlanButton= page.getByTestId('add-to-cart-pro')
  await expect(proPlanButton).toBeVisible()
  await proPlanButton.click()


 const searchButton=page.getByTestId('search-button')
 await expect(searchButton).toBeVisible()
 await searchButton.click()







})