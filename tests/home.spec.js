import { test, expect } from '@playwright/test';

test('Verify heading is visible', async ({page}) => {
    await page.goto('https://stagecraft.vercel.app/');
    await expect(page.getByRole('heading', { name: 'StageCraft Preview' })).toBeVisible();
})
