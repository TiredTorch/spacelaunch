describe('shared-ui: EventContent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=eventcontent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to EventContent!');
    });
});
