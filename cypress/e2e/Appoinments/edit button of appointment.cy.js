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
    cy.get('[href="/asd"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[data-id="800002"] > .MuiDataGrid-cell--withRenderer').click()
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(2)').clear().type('2024-08-17')
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(2)').should('contain.text','Appointment Date')
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(3)').clear().type('carefully')
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(3)').should('contain.text',"Appointment Notes")


    })
})