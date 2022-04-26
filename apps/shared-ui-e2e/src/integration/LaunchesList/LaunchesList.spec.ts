describe('shared-ui: LaunchesList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=launcheslist--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LaunchesList!');
    });
});
