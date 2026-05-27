import { test, expect } from '@playwright/test';

test('Car rental search in New York', async ({ page }) => {
 
await page.goto('https://www.booking.com/cars/index.uk.html');
await page.getByText('Місце отримання').fill('New York');
await page.getByRole('button', { name: 'Пошук' }).click();
await expect(page).toHaveURL('https://www.booking.com/cars/index.uk.html');
});