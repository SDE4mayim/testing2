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
    cy.get('[data-id="800003"] > .MuiDataGrid-cell--withRenderer > .cellAction > .viewbutton').click()
    cy.get('[data-testid="EditIcon"]').click()
   
    cy.get('[data-testid="DeleteIcon"]').click()
    ///cy.on('window:alert',(t)=>{

      /// expect(t).to.contains('Failed to delete the profile');
   /// })
    /// cy.get("").should('have.text','you failed clicked an alert')
    })
    })