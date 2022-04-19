import { Header, Overlay } from "@spacelaunch/spacelaunch/ui-shared";

export function App() {
  return (
    <>
      <Header hasLinkToHome={true}/>
      <Overlay childrenAlignType={"left"}>
        hello
      </Overlay>
    </>
  );
}

export default App;
