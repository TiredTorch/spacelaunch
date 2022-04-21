import { SpacelaunchLayout } from '@spacelaunch/spacelaunch/layout-shared';
import { 
	RocketContent, 
	RocketSection 
} from '@spacelaunch/spacelaunch/ui-shared';

/* eslint-disable-next-line */
export interface RocketPageProps {}

// eslint-disable-next-line no-unused-vars
export function RocketPage(props: RocketPageProps) {
	return (
		<SpacelaunchLayout 
			heroComponent={RocketContent} 
			contentComponent={RocketSection} 
			settings={{
				hasHeaderLink: true,
				bg: null
			}}/>
	);
}

export default RocketPage;
