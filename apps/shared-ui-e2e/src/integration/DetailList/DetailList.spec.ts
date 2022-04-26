describe('shared-ui: DetailList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=detaillist--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DetailList!');
    });
});
