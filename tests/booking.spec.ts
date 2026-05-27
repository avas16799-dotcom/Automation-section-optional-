import { test, expect } from '@playwright/test';

test('Пошук авто в New York', async ({ page }) => {
 await page.goto('https://www.booking.com/cars/index.uk.html');
await page.getByText('Місце отримання').fill('New York');
await page.getByRole('button', { name: 'Пошук' }).click();
await expect(page).toHaveURL('https://www.booking.com/cars/index.uk.html');
});

//https://cars.booking.com/search-results?aid=304142
test('пошук по чекбоксу Середній автомобіль', async ({ page }) => {
 await page.goto('https://cars.booking.com/search-results?aid=304142');
await page.getByTestId('filter-carCategory').getByText('Середній автомобіль');
});


test('Зміна мови', async ({ page }) => {
 await page.goto('https://www.booking.com/cars/index.uk.html');
await page.getByTestId('header-language-picker-trigger');
await expect(page).toHaveURL("https://www.booking.com/cars/index.uk.html");
});






test('Клікна авто', async ({ page }) => {
 
await page.goto('https://cars.booking.com/search-results?aid=304142');
await page.waitForLoadState('networkidle');
await page.locator('[aria-label="Переглянути пропозицію"]').first().click();
await expect(page).toHaveURL('/booking/');
});
