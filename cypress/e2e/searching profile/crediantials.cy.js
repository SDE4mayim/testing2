describe('open',() =>{
    it('verify',() =>{
       cy.visit('https://vetcastle.com')
       cy.get('.grow > :nth-child(2) > .font-medium').click()
       cy.url().should('eq','https://vetcastle.com/signin')
       cy.get('.justify-center > :nth-child(3)').click()
       cy.get('.w-full > .text-gray-400').should('contain','Hospitals and clinics can use this login')
       cy.get('#username').type("srivathsandv2")
       cy.get('#password').type("1SDE@mayim")
       cy.get('.btn').click() 
       cy.wait(41)
       cy.reload()
    })
})