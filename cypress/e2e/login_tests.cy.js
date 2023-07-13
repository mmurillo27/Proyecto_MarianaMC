import loginPage from "../pages/login_page"
import homePage from "../pages/login_page"

describe('login tests.cy.js', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
 context('login a', () => {
  it.only('empty login', () => {
    loginPage.elements.userName().type('')
    loginPage.elements.password().type('')
    loginPage.clickOnloginBtn()
    loginPage.elements.Message().should('exist').contains("Epic sadface")
  })
 })
context('login b', () => {
  it.only('incorrect login', () => {
    loginPage.elements.userName().type('mariana')
    loginPage.elements.password().type('mariana')
    loginPage.clickOnloginBtn()
    loginPage.elements.Message().should('exist').contains('Epic sadface: Username and password do not match')
  })
})
context('login c', () => {
  it.only('successful', () => {
    loginPage.elements.userName().type('standard_user')
    loginPage.elements.password().type('secret_sauce')
    loginPage.clickOnloginBtn()
  })
})

})