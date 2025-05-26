import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
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

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfoButton()
//    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
//    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
//    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
//    cy.get(selectorsList.genericNameField).eq(3).clear().type('123456')
//    cy.get(selectorsList.genericNameField).eq(4).clear().type('1234567')
//    cy.get(selectorsList.genericNameField).eq(5).clear().type('12345678')
//    cy.get(selectorsList.genericNameField).eq(6).clear().type('2025-25-05')
//    cy.get(selectorsList.dateCloseButton).click()
//    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
//    cy.get(selectorsList.secondCombobox).click()
//    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
//    cy.get(selectorsList.thirdCombobox).click()
//    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
//    cy.get('body').should('contain', 'Successfully Updated')
//    cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

})
})