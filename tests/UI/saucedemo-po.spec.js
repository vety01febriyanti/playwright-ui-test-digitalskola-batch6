const { test } = require ("@playwright/test");
const { LoginPage } = require ("./page object-v/login-page");
const { DashboardPage } = require("./page object-v/dashboard-page");
const { CartPage } = require("./page object-v/cart-page");

test ('TC 2 - Successful login using page object', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)

    await loginPage.navigate()
    await loginPage.login ('standard_user', 'secret_sauce')
    await dashboardPage.validateOnPage ()

});

test ('TC 3 - Successful login using page object -visual user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)

    await loginPage.navigate()
    await loginPage.login ('visual_user', 'secret_sauce')
    await dashboardPage.validateOnPage ()
    
});

test ('TC 1 -  User succesfully Add item to cart', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)
    const cartPage = new CartPage(page)

    await loginPage.navigate()
    await loginPage.login ('standard_user', 'secret_sauce')
    await dashboardPage.validateOnPage ()
    await cartPage.validateItemInCart ()

});
