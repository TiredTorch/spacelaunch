describe('shared-ui: RocketContent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rocketcontent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to RocketContent!');
    });
});
