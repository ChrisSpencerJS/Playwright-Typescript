import { expect, type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly mobileSearchBox: Locator;
  readonly searchButton: Locator;
  readonly isMobile: boolean;

  constructor(page: Page, isMobile: boolean) {
    this.page = page;
    this.isMobile = isMobile;
    this.searchBox = page.getByRole('combobox');
    this.searchButton = page.getByLabel('Google Search').first();
    this.mobileSearchBox = page.getByRole('textbox', { name: 'Google Search' });
  }

  async goto() {
    await this.page.goto('');
  }

  async enterSearchTerm(text: string) {
    if(this.isMobile)
      await this.mobileSearchBox.fill(text);
    else
      await this.searchBox.fill(text);
  }

  async startSearch() {
    if(this.isMobile)
      await this.page.keyboard.press('Enter');
    else
      await this.searchButton.click();
  }
}