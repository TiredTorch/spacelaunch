describe('shared-ui: Timer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=timer--primary&args=time;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Timer!');
    });
});
