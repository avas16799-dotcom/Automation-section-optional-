import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://www.booking.com',
    headless: false,
    screenshot: 'only-on-failure',
  },
});