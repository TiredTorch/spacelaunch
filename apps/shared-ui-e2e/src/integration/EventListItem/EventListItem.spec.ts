describe('shared-ui: EventListItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=eventlistitem--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to EventListItem!');
    });
});
