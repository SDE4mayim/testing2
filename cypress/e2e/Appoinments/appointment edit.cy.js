describe('user',()=>{
    it('name',()=>{
    cy.visit('https://vetcastle.com')
    cy.get('.grow > :nth-child(2) > .font-medium').click()
    cy.get('.justify-center > :nth-child(3)').click()
    cy.get('#username').type('naveen')
    cy.get('#password').type('NAVEEn@3445')
    cy.get('.btn').click()
    cy.wait(1000)
    cy.reload()
    cy.get('.MuiToolbar-root > .MuiTypography-root').click()
    cy.url().should('eq','https://vetcastle.com/maindashboard')
    cy.get('[href="/asd"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.url().should('eq','https://vetcastle.com/asd')
    cy.get('[data-id="800004"] > .MuiDataGrid-cell--withRenderer > .cellAction > .viewbutton').click()
    cy.get('[data-testid="EditIcon"]').click()
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(2)').clear().type('2024-06-11 05:06.fm')
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(3)').clear().type('some improtant instructions')
    cy.get('[data-testid="SaveIcon"]').click()
    })
})