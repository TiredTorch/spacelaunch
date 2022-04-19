import { Button, ContentSection, Footer, Header, HomeContent, LaunchContent, Overlay } from "@spacelaunch/spacelaunch/ui-shared";

export function App() {
  return (
    <>
      <Header hasLinkToHome={true}/>
      <Overlay>
        <LaunchContent/>
      </Overlay>
      <ContentSection>
      </ContentSection>
      <Footer/>
    </>
  );
}

export default App;
