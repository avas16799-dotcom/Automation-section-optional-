# Booking.com Car Rental — Automation Tests

UI automation tests for Booking.com car rental flow using Playwright + TypeScript.

## Tech Stack

- TypeScript
- Playwright

## Project Structure

tests/
  booking.spec.ts   # UI tests for car rental flow
playwright.config.ts

## Tests Coverage

1. Search car in New York — opens car rental page, enters location, clicks search
2. Filter by car category — filters results by medium car category checkbox
3. Language switch — checks language picker trigger on main page
4. Click on car — clicks view offer button on search results page

## How to Run

### 1. Clone the repo
git clone https://github.com/avas16799-dotcom/Automation-section-optional-.git
cd Automation-section-optional-

### 2. Install dependencies
npm install
npx playwright install

### 3. Run tests
npx playwright test

### 4. Run with visible browser
npx playwright test --headed

### 5. View test report
npx playwright show-report