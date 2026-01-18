import { expect, test } from '@playwright/test';

import { storybookPath } from '../../utils/utils';

test.describe('DropdownMenu', () => {
  test('Primary', async ({ page }) => {
    await page.goto(storybookPath('components-dropdown-menu--primary'));
    await page.getByRole('button', { name: /Open/i }).click();
    await expect(page).toHaveScreenshot('dropdown-menu-primary.png');
  });
});
