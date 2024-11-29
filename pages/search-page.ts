import { expect, type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('combobox');
    this.searchButton = page.getByLabel('Google Search').first();
  }

  async goto() {
    await this.page.goto('');
  }

  async enterSearchTerm(text: string) {
    await this.searchBox.fill(text);
  }

  async startSearch() {
    await this.searchButton.click();
  }
}