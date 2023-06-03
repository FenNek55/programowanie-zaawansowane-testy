// https://on.cypress.io/api

describe('Full e2e test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'My Todo List')
  })

  it('should display an input and a button', () => {
    cy.visit('/')
    cy.get('input').should('exist')
    cy.get('button').should('exist')
  })

  it('should add a todo when typing in the input and clicking the button', () => {
    cy.visit('/')
    cy.get('input').type('New Todo')
    cy.get('button').click()
    cy.contains('New Todo')
  })

  it('should mark a todo as done when clicking the button', () => {
    cy.visit('/')
    cy.get('input').type('New Todo')
    cy.get('button.todo-form__button').click()
    cy.get('.todo-item').should('exist')
    cy.get('button.todo-item__button').click()
    cy.get('.todo-item').should('not.exist')
  })
})
