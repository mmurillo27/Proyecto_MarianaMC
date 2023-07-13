import productosPage from "../pages/products_page"
import loginPage from "../pages/login_page"

describe('inventory tests', () => {
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
   context('inventory a', () => {
    it.only('add & remove from inventory', () => {
     productosPage.clickOnBultoBtn()
     productosPage.clickOnRemoveBultoBtn()
    })
  })
  context('inventory b', () => {
    it.only('add & remove from cart', () => {
     productosPage.clickOnBultoBtn()
     productosPage.clickOnCarritoBtn()
     productosPage.clickOnRemoveBultoBtn()
    })
  })
})
  
  