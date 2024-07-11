describe('open',() =>{
    it('verify',() =>{
       cy.visit('https://vetcastle.com')
       cy.get('.grow > :nth-child(2) > .font-medium').click()
       cy.url().should('eq','https://vetcastle.com/signin')
       cy.get('.w-full > .text-gray-400').should('contain','Pet Owners can use this login')
       cy.get('.justify-center > :nth-child(3)').click()
       cy.get('#username').type('srivathsandv2')
       cy.get('#password').type('1SDE@mayim')
       cy.get('.btn').click()
       cy.wait(1000)
       cy.visit("https://vetcastle.com/maindashboard")
       cy.get('[href="/psd"] > .MuiListItemText-root > .MuiTypography-root').click()
       cy.get('.MuiGrid-container > :nth-child(3) > .MuiButtonBase-root').click()
       cy.get('.MuiGrid-container > :nth-child(4)').type(10)
      //cy.get('.MuiGrid-container > :nth-child(4)').invoke('value').then(value=>{expect(value).should('eq',10)
      //cy.get('.MuiGrid-container > :nth-child(4)').should('contain.text',10)
       cy.get('.MuiGrid-container > :nth-child(4)').should('be.visible')
      //  cy.get('.MuiGrid-container > :nth-child(4)').invoke('val').should('eq', '10');
      })
    });
    


