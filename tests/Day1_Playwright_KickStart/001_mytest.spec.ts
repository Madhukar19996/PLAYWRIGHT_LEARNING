import {test , expect } from "@playwright/test";

/*

//
fixture -global variable :page, broweser

test("Title", async ({page})=>{

//step1
//step2
//step3....

})


*/


test("Verify Title", async ({page})=>{

      await page.goto("https://demowebshop.tricentis.com/")
      await expect(page).toHaveTitle("Demo Web Shop")
})