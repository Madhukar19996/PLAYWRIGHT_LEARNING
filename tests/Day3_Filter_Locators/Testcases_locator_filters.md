# Playwright Locator Filters - Test Cases

**Application:** Playwright Locators with Filters Practice
**Purpose:** Practice and validate all Playwright locators with filters
**Test URL:** https://sdetqa.vercel.app/filters_practice.html

---

| S.No | Title | Steps | Expected Result |
|------|-------|-------|------------------|
| 1 | Verify "Add to cart" for Product 2 | 1. Open the page<br>2. Locate "Product 2"<br>3. Find "Add to cart" button | "Add to cart" button should be visible |
| 2 | Count items not having "Out of stock" | 1. Open the page<br>2. Go to product list<br>3. Filter items without "Out of stock" | 3 items should be displayed |
| 3 | Find items with "In stock" | 1. Open the page<br>2. Search for "In stock" items | 3 items should be found |
| 4 | Find items with "Out of stock" | 1. Open the page<br>2. Search for "Out of stock" items | 2 items should be found |
| 5 | Verify elements using data-testid | 1. Open the page<br>2. Locate apple, banana, orange using test id | All elements should be visible with correct text |
| 6 | Count all elements with test ids | 1. Open the page<br>2. Locate all elements with data-testid | Total count should be 5 |
| 7 | Find "Say goodbye" button for John | 1. Open the page<br>2. Find "John"<br>3. Locate "Say goodbye" button | Button should be visible with correct text |
| 8 | Find "Say hello" button for Mary | 1. Open the page<br>2. Find "Mary"<br>3. Locate "Say hello" button | Button should be visible with correct text |
| 9 | Count "Say hello" buttons for John | 1. Open the page<br>2. Filter "John"<br>3. Find "Say hello" buttons | Count should be 1 |
| 10 | Count "Say goodbye" buttons for Mary | 1. Open the page<br>2. Filter "Mary"<br>3. Find "Say goodbye" buttons | Count should be 1 |
| 11 | Count all buttons for John | 1. Open the page<br>2. Filter "John"<br>3. Count buttons | Count should be 2 |
| 12 | Find "Subscribe" buttons using multiple conditions | 1. Open the page<br>2. Locate buttons with title "Subscribe" | 2 buttons should be found and visible |
| 13 | Find "Unsubscribe" button | 1. Open the page<br>2. Locate button with title "Unsubscribe" | 1 button should be found with correct text |
| 14 | Find "details" buttons for done tasks | 1. Open the page<br>2. Filter tasks with "done"<br>3. Find "details" buttons | 2 buttons should be found |
| 15 | Find "details" button for pending tasks | 1. Open the page<br>2. Filter tasks with "pending"<br>3. Find "details" button | 1 button should be found |
| 16 | Count tasks with "done" status | 1. Open the page<br>2. Filter tasks with "done" | Count should be 2 |
| 17 | Find tasks not marked "done" | 1. Open the page<br>2. Filter tasks without "done" | 2 tasks should be found |
| 18 | Verify Product 2 button | 1. Open the page<br>2. Locate "Product 2"<br>3. Find its button | Button should be visible with text "Add to cart" |
| 19 | Verify stock status counts | 1. Open the page<br>2. Count "In stock" items<br>3. Count "Out of stock" items | In stock = 3, Out of stock = 2 |
