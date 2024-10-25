const { expect } = require("@playwright/test");

export class CartPage {
    constructor(page) {
        this.page = page;
        this.item = page.getByText('Sauce Labs Backpack');
        this.item2 = page.getByRole('button', { name: 'add-to-cart-sauce-labs-backpack' });
        this.cartIcon = page.getByRole('link', { name: 'shopping cart' });
        this.cartList = page.locator('[data-test="Sauce Labs Backpack"]');
    }

    async validateItemInCart() {
       
        await expect(this.item).toBeVisible();
        await expect(this.item2).toBeEnabled();

        const count = await this.cartList.count();

        expect(count).toBe(1); 
    }
}
