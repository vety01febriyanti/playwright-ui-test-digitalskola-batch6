const {expect} = require ("@playwright/test");

export class DashboardPage {

    constructor( page ) {
        this.pageTitle = page.getByText("Swag Labs");
        this.menuButton = page.getByRole("button", {name: "open menu" })


    }

    async validateOnPage() {
       await expect(this.pageTitle).toBeVisible()
       await expect(this.menuButton).toBeVisible()


    }
    
}