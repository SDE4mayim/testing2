describe('open',() =>{
    it('verify',() =>{
        cy.visit('https://vetcastle.com')
        cy.get(".grow > :nth-child(2) > .font-medium").click()
        cy.title().should("eq","VET CASTLE")
        cy.url().should("eq","https://vetcastle.com/signin")
        cy.get("#username").type("srivathsandv2")
        cy.get("#password").type("1SDE@mayim")
        cy.get(".btn").click()
        cy.get('.MuiAlert-message').should("contain.text","Invalid credentials")
        
    })
}
)