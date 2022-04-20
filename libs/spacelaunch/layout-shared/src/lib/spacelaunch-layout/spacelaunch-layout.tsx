import { ContentSection, Footer, Header, HomeContent, Overlay } from "@spacelaunch/spacelaunch/ui-shared";
import { FC } from "react";

/* eslint-disable-next-line */
export interface SpacelaunchLayoutProps {
  heroComponent: FC,
  contentComponent: FC,
  settings: {
    hasHeaderLink : boolean
  }
}

export function SpacelaunchLayout(props: SpacelaunchLayoutProps) {
  return (
    <>
      <Header hasLinkToHome={props.settings.hasHeaderLink}/>
        <Overlay>
          <props.heroComponent/>
        </Overlay>
        <ContentSection>
          <props.contentComponent/>
        </ContentSection>
        <Footer/>
    </>
  );
}

export default SpacelaunchLayout;
