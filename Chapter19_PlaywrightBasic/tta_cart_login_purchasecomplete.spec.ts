import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-tta-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('asasdas');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('asasa');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('000000');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  await expect(page.locator('[data-test="complete-text"]')).toBeVisible();
  await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the TTA Express pony can get there!');
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
});