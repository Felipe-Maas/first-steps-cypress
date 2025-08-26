import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {

    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    selectField: ".oxd-select-text--active",
    radioField: ".oxd-radio-wrapper",
  }

  it.only('User Info Update - Success', () => {

    loginPage.accessLoginPage()  
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

  //  
  //  cy.get(selectorsList.dashboardGrid)
  //  cy.get(selectorsList.myInfoButton).click()
   // cy.get(selectorsList.firstNameField).clear().type('firstNameTest')
   // cy.get(selectorsList.middleNameField).clear().type('middleNameTest')
   // cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    //cy.get(selectorsList.genericField).eq(3).clear().type('idTest')
   // cy.get(selectorsList.genericField).eq(4).clear().type('otherIdTest')
   // cy.get(selectorsList.genericField).eq(5).clear().type('driversLicenseTest')
   // cy.get(selectorsList.dateField).eq(0).clear().type('2025-13-08')
   // cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.selectField).eq(0).click({force: true})
    //cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
   // cy.get(selectorsList.selectField).eq(1).click({force: true})
    //cy.get(':nth-child(3) > span').click()
    //cy.get(selectorsList.dateField).eq(1).clear().type('2025-13-08')
    //cy.get(selectorsList.dateCloseButton).click()
   // cy.get(selectorsList.radioField).eq(0).click()
    //cy.get(selectorsList.submitButton).eq(0).click({force: true})
   // cy.get('body').should('contain', 'Successfully Update')
   // cy.get('.oxd-toast-close')
    
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
})

})