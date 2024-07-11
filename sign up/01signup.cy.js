describe('open',() =>{
    it('verify',() =>{
        cy.visit('https://vetcastle.com')
        cy.get(".btn-sm").click()
        cy.title().should("eq","VET CASTLE")
        cy.url().should("eq","https://vetcastle.com/signup")
    })
}
)