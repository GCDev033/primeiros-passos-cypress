class MenuPage{
    selectorsList() {
        const selectors = {
            myInfoButton: ":nth-child(6) > .oxd-main-menu-item",        
        }

        return selectors
    }

    accessMyInfoButton() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    
}

export default MenuPage