import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {

    loginPage.accessLoginPage()  
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.animal(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.integer({ min: 1, max: 10 }), chance.integer({ min: 11, max: 20 }), chance.integer({ min: 21, max: 30 }), '2022-22-02')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
  })

})