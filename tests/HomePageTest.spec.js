const {test, expect} = require('@playwright/test');

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');
  });

  test('has title', async ({page}) => {
    await expect(page).toHaveTitle('STORE');
  });

  test('has url', async ({page}) => {
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
});
});