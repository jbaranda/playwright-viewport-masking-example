import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('With default viewport { width: 1280, height: 720 }', () => {
  test('button element below viewport height will not be masked', async ({ page }) => {
    await page.goto(`file://${path.resolve('example.html')}`)
    await page.screenshot({path: 'full-page-with-masked-elements-excluding-button.jpg', fullPage: true, mask: [page.getByRole('paragraph'), page.getByRole('button')]})
  });
})

test.describe('With larger viewport height { width: 1280, height: 1000 }', () => {
  test.use({viewport: { width: 1280, height: 1000 }})
  test('button element within viewport height will be masked', async ({ page }) => {
    await page.goto(`file://${path.resolve('example.html')}`)
    await page.screenshot({path: 'full-page-with-masked-elements-including-button.jpg', fullPage: true, mask: [page.getByRole('paragraph'), page.getByRole('button')]})
  });
})