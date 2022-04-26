describe('shared-ui: SubtitleBox component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=subtitlebox--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SubtitleBox!');
    });
});
