import { test, expect } from '@playwright/test';

test('Automation Practice Form Test', async ({ page }) => {

  console.log('Executing Automation Practice Form Test demoqa1');
  // Navigate to DemoQA Practice Form
  await page.goto('https://demoqa.com/automation-practice-form');

  // Fill basic text fields
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  await page.fill('#userEmail', 'john@example.com');
  await page.fill('#userNumber', '9876543210');

  // Select Gender & Hobbies
  await page.click('label[for="gender-radio-1"]');
  await page.click('label[for="hobbies-checkbox-1"]');

  // Fill Current Address
  await page.fill('#currentAddress', '123 Main Street');

  // Submit Form
  await page.click('#submit', { force: true });

  // Assert modal popup opens with submission summary
  await expect(page.locator('#example-modal-sizes-title-lg')).toBeVisible();
  await expect(page.locator('.table-responsive')).toContainText('John Doe');

  console.log('Form submitted successfully demoqa1');
});
