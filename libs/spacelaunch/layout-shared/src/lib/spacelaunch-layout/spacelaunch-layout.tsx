import { FC } from 'react';
import { 
	ContentSection, 
	Footer, 
	Header, 
	Overlay 
} from '@spacelaunch/spacelaunch/ui-shared';

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
