import { test, expect } from '@playwright/test'

test('Validate Product Table', async ({ page }) => {

    //open the webpage
    await page.goto("https://sdetqa.vercel.app/autoplay.html");

    //function validation
    const table = page.locator('table').first();
    const headers = table.locator('thead th');
    const rows = table.locator('tbody tr');

    console.log("Number of rows:", await rows.count());
    console.log("Number of columns:", await headers.count());


    //1 & 2 verify row and column count 

    await expect(headers).toHaveCount(5);
    await expect(rows).toHaveCount(4);

    // 3. Read all data from 3rd row 
    // index 2 → 3rd row including header
    // Expected: Keyboard | Electronics | $79 | 0 | Out of Stock

    const thirdRowCells = rows.nth(2).locator('td');
    console.log('Third row data:', await thirdRowCells.allInnerTexts());
    await expect(thirdRowCells).toHaveText(['Keyboard', 'Electronics', '$79', '0', 'Out of Stock']);

    //4. Read all data from the table (excluding header)
    // Expected: 4 rows of product data

    const tableData:string[][]=[];

    const rowCount=await rows.count();
    console.log("Product Name \t Category \t Price  \tStock  \t Status")
    for(let r=0; r<rowCount;r++){
        const cellvalues=await rows.nth(r).locator('td').allInnerTexts(); //// Get all cell values for the current row
        tableData.push(cellvalues);// Store the cell values in the tableData array
        console.log(`Row ${r + 1}`,cellvalues);
    }

    console.log("Particular row:",tableData[1]);

    //5. Print/Get all product names → Expected: Laptop, Mouse, Keyboard, Monitor
    const productNames=[]

    for(let r=0; r<tableData.length;r++){
        //console.log(tableData[r][0]);
        productNames.push(tableData[r][0]);
    }
    
    console.log("Product Names",productNames);
    expect(productNames).toEqual(['Laptop', 'Mouse', 'Keyboard', 'Monitor']);

    //6. Print products where Stock = 0 → Expected: Keyboard
    
    const outOfStock=[];

    for(let r=0; r<tableData.length;r++){
         

        if(tableData[r][3]==='0'){
            outOfStock.push(tableData[r][0]);
        }
        
    }
    console.log("Out-of stock products:",outOfStock)
    expect(outOfStock).toEqual(["Keyboard"]);

    //7. Print products where Status = "In Stock" → Expected: Laptop, Mouse, Monitor

        const inStock=[];

    for(let r=0; r<tableData.length;r++){
         

        if(tableData[r][4]==='In Stock'){
            inStock.push(tableData[r][0]);
        }
        
    }
    console.log("In-stock products:",inStock)
    expect(inStock).toEqual([ 'Laptop', 'Mouse', 'Monitor' ]);

  //8 & 9
 //8. Count number of products "In Stock" → Expected: 3
 //9. Count number of products "Out of Stock" → Expected: 1

expect(inStock.length).toBe(3)
expect(outOfStock.length).toBe(1)

//Get price of a specific product (e.g., Mouse) → Expected: $29

let mousePrice;

for(let r=0;r<tableData.length;r++){
    if(tableData[r][0]==='Mouse'){
        mousePrice=tableData[r][2]
        break
    }
  }
 expect(mousePrice).toBe('$29')

 //11. Calculate total price for all the products
 
 let totalPrice=0;

 
for(let i=0;i<tableData.length;i++){
    totalPrice += Number(tableData[i][2].replace('$','')); // Convert the price string to a number and add it to totalPrice

  }

  expect(totalPrice).toBe(1456);





})