import { test, expect } from '@playwright/test';

test('home page displays hero heading', async ({ page }) => {
  await page.goto('/');
  const heading = page.locator('h1');
  await expect(heading).toContainText('Comprehensive Facility Management Solutions');
});
