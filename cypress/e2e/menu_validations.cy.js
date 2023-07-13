import menuPage from "../pages/menu_page"
import loginPage from "../pages/login_page"

describe('menu tests', () => {
  beforeEach(() => {
    cy.intercept('/service-worker.js',{
      body: undefined
  })
    cy.clearAllSessionStorage({log:true})
    cy.visit('https://www.saucedemo.com/')
    loginPage.elements.userName().type('standard_user')
    loginPage.elements.password().type('secret_sauce')
    loginPage.clickOnloginBtn()
  })
 context('menu a', () => {
  it.only('right options & order', () => {
    menuPage.clickOnMenuBtn()
    menuPage.elements.allItems().should('exist').contains('All Items')
    menuPage.elements.about().should('exist').contains('About')
    menuPage.elements.logout().should('exist').contains('Logout')
    menuPage.elements.resetApp().should('exist').contains('Reset App State')
  })
})
context('menu b', () => {
  it.only('menu shows & hides', () => {
    menuPage.clickOnMenuBtn()
    menuPage.clickOnCerrarMenuBtn()
  })
})

})