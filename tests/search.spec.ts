import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/search-page';

let searchPage: SearchPage;

test.beforeEach(async ({ page, isMobile }) => {
  console.log(`Running: "${test.info().title}"`);
  searchPage = new SearchPage(page, isMobile);
  await searchPage.goto();
  const acceptCookies = page.getByRole('button', { name: 'Accept all' });
  if(await acceptCookies.isVisible())
    await acceptCookies.click();
});

test.skip('has correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Google/);
});

test('loads search results', async ({ page }) => {
  await searchPage.enterSearchTerm('zappa');
  //await page.pause();
  await searchPage.startSearch();
  await expect(page).toHaveTitle(/zappa/); 
});
