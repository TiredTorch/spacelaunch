describe('shared-ui: EventSection component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=eventsection--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to EventSection!');
    });
});
