class MyInfoPage{
    
    selectorsList() {
        const selectors = {
            firstNameField: ".orangehrm-firstname",
            middleNameField: ".orangehrm-middlename",
            lastNameField: ".orangehrm-lastname",
            genericNameField: ".oxd-input--active",
            dateCloseButton: ".oxd-form > :nth-child(3) > :nth-child(2)",
            genericCombobox: ".oxd-select-text--arrow",
            secondCombobox: ".oxd-select-dropdown > :nth-child(8)",
            thirdCombobox: ".oxd-select-dropdown > :nth-child(3)",
            submitButton: ".orangehrm-left-space"
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicense, licenseDate) {
        cy.get(this.selectorsList().genericNameField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericNameField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericNameField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericNameField).eq(6).clear().type(licenseDate)
        
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })

    }
    
    fillStatus() {
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirdCombobox).click()
    }
    
}

export default MyInfoPage