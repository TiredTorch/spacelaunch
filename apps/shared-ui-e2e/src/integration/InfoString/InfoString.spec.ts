describe('shared-ui: InfoString component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=infostring--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to InfoString!');
    });
});
