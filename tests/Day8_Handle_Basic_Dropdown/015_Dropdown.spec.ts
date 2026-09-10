import { test, expect } from '@playwright/test'

const baseURL = 'https://sdetqa.vercel.app/autoplay.html';

test.describe('Handling Dropdowns', () => {

     test.beforeEach(async ({ page }) => {
          await page.goto(baseURL);
          await expect(page.getByText('AutoPlay')).toBeVisible();
     });

     test('Single Select Dropdown', async ({ page }) => {

          const countrySelect = page.locator('#country');
          await expect(countrySelect).toBeVisible();


          // Default selection should be India
          await expect(countrySelect).toHaveValue('india');

          //selectOption() --> selects option from the dropdown

          //Select by visible text/label --always preferable
          await countrySelect.selectOption({ label: 'USA' });
          //await countrySelect.selectOption('USA'); //This also a lebel
          await expect(countrySelect).toHaveValue('usa');

          // Select by option value
          await countrySelect.selectOption({ value: 'uk' });
          await expect(countrySelect).toHaveValue('uk');

          // Select by index index start with 0 
          await countrySelect.selectOption({ index: 3 });
          await expect(countrySelect).toHaveValue('germany');

          // Select by a combination of value and label
          await countrySelect.selectOption({ value: 'france', label: 'France' });
          await expect(countrySelect).toHaveValue('france');

          //Validate  drop option count
          //Approach : 1
          const options = countrySelect.locator('option') //locator channing  
          await expect(options).toHaveCount(5);

          //Approach : 2
          const optionMultiple = page.locator('#country option') //directly captaring all the option
          await expect(optionMultiple).toHaveCount(5);

          //Approach : 3
          const dropdown = await page.locator('#country option').count()
          expect(dropdown).toBe(5);

          //validate options contains Germany

          const optionTexts = await options.allTextContents() //capture text from all the options 
          //options.allInnerTexts() //

          expect(optionTexts).toContain("Germany");

          //Printing option texts 
          for (const option of optionTexts) {
               console.log(option)
          }

          });

          test('Multi Select Dropdown', async ({ page }) => {

               const colorSelect = page.locator('#colors');
               await expect(colorSelect).toBeVisible();

               // The initial selected value should include blue as the first selected option
               await expect(colorSelect).toHaveValue('blue');

               // Select multiple options by values
               await colorSelect.selectOption([{ value: 'red' }, { value: 'green' }, { value: 'yellow' }]);

               // Select multiple options by index
               await colorSelect.selectOption([{ index: 0 }, { index: 2 }, { index: 3 }]);

               await expect(colorSelect).toHaveValues(['red', 'green', 'yellow']);

          });

          test('Sorted options in a dropdown', async ({ page }) => {
     //const dropdownOptions = page.locator('#sorted option');  // Fruits - sorted dropdown
     const dropdownOptions = page.locator('#colors option');  // Colors - not sorted

    const optionsText = await dropdownOptions.allTextContents();  // Returns array of all the text values of the options in the dropdown
    console.log("Options in the dropdown:", optionsText);

    // Store the original list of option texts
    const originalList = optionsText; //It just creates a reference to the same array.If one changes → the other also changes

    //const sortedList = optionsText.sort(); //This is wrong because it sorts the original array and hence both originalList and sortedList will be same (sorted) 
    const sortedList = [...optionsText].sort(); //(spread operator) → creates a new copy of the array

    console.log("Original list:", originalList);
    console.log("Sorted list:", sortedList);

    expect(originalList).toEqual(sortedList);




          })


});