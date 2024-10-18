const { test, expect } = require('@playwright/test');

test('web UI demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
});

test.describe('web UI demo', () => {
    test('TC-1 succesfull login', async ({ page }) => {

        await page.goto ('https://www.saucedemo.com/')

        await page.getByPlaceholder('username'). fill('standard_user')
        await page.locator("[id='password']").fill('secret_sauce')
        await page.getByText('login').click()

        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByRole('button', { name: 'open menu' })).toBeVisible()

    });
    
});

test.describe('web UI Demo', () => {
    test('TC-2 User succesfully Add item to cart', async ({ page }) => {

        await page.goto ('https://www.saucedemo.com/')

        await page.getByPlaceholder('username'). fill('standard_user')
        await page.locator("[id='password']").fill('secret_sauce')
        await page.getByText('login').click()
        await page.locator("[data-test='add-to-cart-sauce-labs-bolt-t-shirt']").click()

        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByText('Sauce Labs Bolt T-ShirtGet')).toBeVisible()
        await expect(page.getByText('$15.99Remove')).toBeVisible()

    });

});

