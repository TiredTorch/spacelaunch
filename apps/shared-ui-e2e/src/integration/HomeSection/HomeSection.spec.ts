describe('shared-ui: HomeSection component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=homesection--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to HomeSection!');
    });
});
