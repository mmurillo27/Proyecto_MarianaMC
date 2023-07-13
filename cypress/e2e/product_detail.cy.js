import loginPage from "../pages/login_page"
import validarProdPage from "../pages/validarProdPage"

describe('product detail', () => {
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
 context('product detail a', () => {
  it.only('first product - back to products', () => {
    validarProdPage.clickOnNombreBultoBtn()
    validarProdPage.elements.imgBulto().should('exist')
    validarProdPage.elements.precioBulto().should('exist').contains('29.99')
    validarProdPage.elements.bultoBtn().should('exist').contains('Add to cart')
    validarProdPage.clickOnBackToProducBtn()
})
})

context('product detail b', () => {
    it.only(' second product - back to products', () => {
      validarProdPage.clickOnNombreBikeBtn()
      validarProdPage.elements.imgBike().should('exist')
      validarProdPage.elements.precioBike().should('exist').contains('9.99')
      validarProdPage.elements.bikeBtn().should('exist').contains('Add to cart')
      validarProdPage.clickOnBackToProducBtn()
  })
  })

  context('product detail c', () => {
    it.only('third product - back to products', () => {
      validarProdPage.clickOnNombreTshirtBtn()
      validarProdPage.elements.imgTshirt().should('exist')
      validarProdPage.elements.precioTshirt().should('exist').contains('15.99')
      validarProdPage.elements.tshirtBtn().should('exist').contains('Add to cart')
      validarProdPage.clickOnBackToProducBtn()
  })
  })
  context('product detail d', () => {
    it.only('fourth product - back to products', () => {
      validarProdPage.clickOnNombreJacketBtn()
      validarProdPage.elements.imgJacket().should('exist')
      validarProdPage.elements.precioJacket().should('exist').contains('49.99')
      validarProdPage.elements.jacketBtn().should('exist').contains('Add to cart')
      validarProdPage.clickOnBackToProducBtn()
  })
  })
  context('product detail e', () => {
    it.only('fifth product - back to products', () => {
      validarProdPage.clickOnNombreOnesieBtn()
      validarProdPage.elements.imgOnesie().should('exist')
      validarProdPage.elements.precioOnesie().should('exist').contains('7.99')
      validarProdPage.elements.onesieBtn().should('exist').contains('Add to cart')
      validarProdPage.clickOnBackToProducBtn()
  })
  })
  context('product detail f', () => {
    it.only('sixth product - back to products' , () => {
      validarProdPage.clickOnNombreTshirtRedBtn()
      validarProdPage.elements.imgTshirtRed().should('exist')
      validarProdPage.elements.precioTshirtRed().should('exist').contains('15.99')
      validarProdPage.clickOnBackToProducBtn()
  })
  })

})