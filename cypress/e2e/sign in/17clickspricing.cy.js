describe('open',() =>{
    it('verify',() =>{
        cy.visit('https://vetcastle.com')
        cy.get(".grow > :nth-child(2) > .font-medium").click()
        cy.title().should("eq","VET CASTLE")
        cy.url().should("eq","https://vetcastle.com/signin")
        cy.get(".justify-center > :nth-child(3)").click()
        cy.get('.text-gray-400.text-center').should("contain.text","Don’t have a hospital account? Sign up")
        cy.get('.grow > :nth-child(1) > .font-medium').click()
        cy.url().should("eq","https://vetcastle.com/pricing")
    })
}
)