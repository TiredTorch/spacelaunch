describe('shared-ui: LaunchSection component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=launchsection--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LaunchSection!');
    });
});
