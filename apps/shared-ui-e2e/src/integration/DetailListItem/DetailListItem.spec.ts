describe('shared-ui: DetailListItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=detaillistitem--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DetailListItem!');
    });
});
