describe('shared-ui: VideoPlayer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=videoplayer--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to VideoPlayer!');
    });
});
