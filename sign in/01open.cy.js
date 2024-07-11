describe('open',() =>{
    it('verify',() =>{
        cy.visit('https://vetcastle.com')
        cy.title().should("eq","VET CASTLE")
    })
}
)