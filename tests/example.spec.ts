import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('');
  const acceptCookies = page.getByRole('button', { name: 'Accept all' });
  if(await acceptCookies.isVisible())
    await acceptCookies.click();
});

test.skip('has correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Google/);
});

test('loads search results', async ({ page }) => {
  // await page.pause();
  await page.getByRole('combobox').fill('zappa');
  await page.getByLabel('Google Search').first().click();
  await expect(page).toHaveTitle(/zappa/);
});
