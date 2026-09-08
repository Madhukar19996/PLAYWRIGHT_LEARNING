# Data Entry Form Validation Test Cases

**Application Used:** Auto Play  
**URL:** https://sdetqa.vercel.app/autoplay.html

## 1. Page Load Validation

| S.No | Steps | Expected Result |
|---:|---|---|
| 1 | Open the URL `https://sdetqa.vercel.app/autoplay.html` | Page should load successfully |
| 2 | Verify text "AutoPlay" is visible | "AutoPlay" heading should be displayed |

## 2. Input Fields Validation

| S.No | Steps | Expected Result |
|---:|---|---|
| 3 | Locate Full name field | Field should be visible & enabled |
| 4 | Check maxlength attribute of Full name | Max length should be 15 |
| 5 | Enter "John Canedy" in Full name | Value should be entered correctly |
| 6 | Locate Email field | Field should be visible |
| 7 | Enter "tester@example.com" | Value should match input |
| 8 | Locate Phone field | Field should be visible |
| 9 | Enter "+91 1234567898" | Value should match input |
| 10 | Locate Address field | Field should be visible |
| 11 | Enter multi-line address | Value should accept newline input |

## 3. Radio Button (Gender) Validation

| S.No | Steps | Expected Result |
|---:|---|---|
| 12 | Locate Male & Female radio buttons | Both should be visible |
| 13 | Select Female radio button | Female should be selected |
| 14 | Verify Male radio button | Male should NOT be selected |

## 4. Checkbox (Days) Validation

| S.No | Steps | Expected Result |
|---:|---|---|
| 15 | Select Sun checkbox | Sun should be checked |
| 16 | Select all checkboxes (Mon–Sun) | All should be checked |
| 17 | Uncheck last 3 (Fri, Sat, Sun) | These should be unchecked |
| 18 | Toggle all checkboxes | Checked → unchecked, unchecked → checked |
| 19 | Select checkboxes using index (1, 3, 6 → Tue, Thu, Sun) | Only those indexes should be checked |
| 20 | Select checkbox with label "Fri" | Friday checkbox should be checked |

## 5. Submit Button Validation

| S.No | Steps | Expected Result |
|---:|---|---|
| 21 | Locate Submit button | Button should be visible |
| 22 | Click on Submit button | Button should be clickable |
| 23 | Verify button state | Button should remain enabled |

## 6. Additional (Recommended) Test Cases

| S.No | Steps | Expected Result |
|---:|---|---|
| 24 | Leave all fields empty and click Submit | Validation message should appear (if implemented) |
| 25 | Enter invalid email format | Error should be shown |
| 26 | Enter more than 15 chars in name | Input should be restricted |
| 27 | Enter alphabets in phone field | Should be restricted (if validation exists) |

---

**Source:** Data Entry Form Validation test cases.
