import { ContentSection, Footer, Header, Overlay } from "@spacelaunch/spacelaunch/ui-shared";

export function App() {
  return (
    <>
      <Header hasLinkToHome={true}/>
      <Overlay childrenAlignType={"left"}>
        hello
      </Overlay>
      <ContentSection>
        ddd
      </ContentSection>
      <Footer/>
    </>
  );
}

export default App;
