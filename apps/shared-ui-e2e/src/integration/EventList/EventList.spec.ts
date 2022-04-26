describe('shared-ui: EventList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=eventlist--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to EventList!');
    });
});
