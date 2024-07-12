describe('first',()=>{
    it('second',()=>{
        cy.visit('https://vetcastle.com')
        cy.url().should ('eq','https://vetcastle.com/')
        cy.get('.grow > :nth-child(2) > .font-medium').click()
        cy.url().should('eq',"https://vetcastle.com/signin")
        cy.get(':nth-child(3) > .text-gray-600').click()
        cy.get('#username').type("srivathsandv2")
        cy.get('#username').type("srivathsandv2")
        cy.get('#password').type("1SDE@mayim")
        cy.get('.btn').click()
        cy.visit("https://vetcastle.com/maindashboard")

    })
})