describe('open',() =>{
    it('verify',() =>{
        cy.log("visit the website")
        cy.visit('https://vetcastle.com')
        cy.title().should('eq','VET CASTLE')
        cy.url().should('eq','https://vetcastle.com/')
        cy.get('.aos-init > .btn').click()
        cy.url().should('eq','https://vetcastle.com/signup')
        
    })
}
)