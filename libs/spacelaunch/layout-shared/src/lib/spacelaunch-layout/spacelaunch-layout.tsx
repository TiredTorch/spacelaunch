import { ContentSection, Footer, Header, HomeContent, Overlay } from "@spacelaunch/spacelaunch/ui-shared";
import { FC } from "react";

/* eslint-disable-next-line */
export interface SpacelaunchLayoutProps {
  heroComponent: FC,
  contentCompnent: FC
}

export function SpacelaunchLayout(props: SpacelaunchLayoutProps) {
  return (
    <>
      <Header hasLinkToHome={true}/>
        <Overlay>
          <props.heroComponent/>
        </Overlay>
        <ContentSection>
          <props.contentCompnent/>
        </ContentSection>
        <Footer/>
    </>
  );
}

export default SpacelaunchLayout;
