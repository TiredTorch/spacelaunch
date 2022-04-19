import { ContentSection, EventContent, Footer, Header, HomeContent, LaunchContent, Overlay, RocketContent } from "@spacelaunch/spacelaunch/ui-shared";

export function App() {
  return (
    <>
      <Header hasLinkToHome={true}/>
      <Overlay>
        <HomeContent/>
      </Overlay>
      <ContentSection>
      </ContentSection>
      <Footer/>
    </>
  );
}

export default App;
