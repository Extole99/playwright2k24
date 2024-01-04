import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 12'],
});

test('test', async ({ page }) => {
  await page.goto('https://m.clinique.com/');
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByRole('button', { name: 'Bestsellers' }).click();
  await page.getByLabel('Shop All Bestsellers').click();
  await page.goto('https://m.clinique.com/products/1575/best-sellers');
  await page.locator('li').filter({ hasText: 'Quick Shop EXCLUSIVE DUO Clinique Smart Clinical Repair™ Wrinkle Correcting' }).getByRole('button').click();
  await page.locator('[data-test-id="sidebar_checkout"]').click();
});