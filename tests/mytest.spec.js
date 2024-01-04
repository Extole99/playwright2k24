import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.aveda.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('[data-test-id="form_signin_email"]').click();
  await page.locator('[data-test-id="form_signin_email"]').fill('ganitest21@gmail.com');
  await page.locator('[data-test-id="form_signin_email"]').press('Tab');
  await page.locator('[data-test-id="form_signin_password"]').fill('Test@123');
  await page.locator('[data-test-id="form_signin_continue"]').click();
  await page.close();
});