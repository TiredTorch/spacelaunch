describe('shared-ui: HomeContent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=homecontent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to HomeContent!');
    });
});
