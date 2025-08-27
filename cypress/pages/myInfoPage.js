class MyInfoPage {

    selectorsList() {

        const selectors = {   

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

        return selectors

    }      

    fillPersonalDetails(firstName, middleName, lastName) {

        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    } 

    fillEmployeeDetails(employeeId, otherId, driversLicense, licenseDate) {

        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()

    }

    saveForm() {

        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')

    }

    fillStatus() {

        cy.get(this.selectorsList().selectField).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
        cy.get(this.selectorsList().selectField).eq(1).click({force: true})
        cy.get(':nth-child(3) > span').click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('2011-01-11')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().radioField).eq(0).click()

    }

}

export default MyInfoPage