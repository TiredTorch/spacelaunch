import { FC } from 'react';
import { 
	ContentSection, 
	Footer, 
	Header, 
	Overlay 
} from '@spacelaunch/shared/ui';

export interface SpacelaunchLayoutProps {
  heroComponent: FC,
  contentComponent: FC,
  settings: {
    hasHeaderLink : boolean
		bg: string | null | undefined
  }
}

export function SpacelaunchLayout(props: SpacelaunchLayoutProps) {
	return (
		<>
			<Header hasLinkToHome={props.settings.hasHeaderLink}/>
			<Overlay bg={props.settings.bg}>
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
