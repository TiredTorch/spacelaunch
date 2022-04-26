describe('shared-ui: DetailItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=detailitem--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DetailItem!');
    });
});
