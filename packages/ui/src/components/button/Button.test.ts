import { expect, test } from '@playwright/test';

import { storybookPath } from '../../utils/utils';

test.describe('Button', () => {
  test(': Primary', async ({ page }) => {
    await page.goto(storybookPath('components-button--primary'));
    await expect(page).toHaveScreenshot('button-primary.png');
  });

  test(': Sizes', async ({ page }) => {
    await page.goto(storybookPath('components-button--sizes'));
    await expect(page).toHaveScreenshot('button-sizes.png');
  });

  test(': Colors', async ({ page }) => {
    await page.goto(storybookPath('components-button--colors'));
    await expect(page).toHaveScreenshot('button-colors.png');
  });

  test(': Variants', async ({ page }) => {
    await page.goto(storybookPath('components-button--variants'));
    await expect(page).toHaveScreenshot('button-variants.png');
  });

  test(': Icons', async ({ page }) => {
    await page.goto(storybookPath('components-button--with-icons'));
    await expect(page).toHaveScreenshot('button-with-icons.png');
  });

  test(': All', async ({ page }) => {
    await page.goto(storybookPath('components-button--all'));
    await expect(page).toHaveScreenshot('button-all.png');
  });

  test(': Disabled', async ({ page }) => {
    await page.goto(storybookPath('components-button--disabled'));
    await expect(page).toHaveScreenshot('button-disabled.png');
  });
});
