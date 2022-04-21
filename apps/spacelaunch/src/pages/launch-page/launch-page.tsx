import { SpacelaunchLayout } from '@spacelaunch/spacelaunch/layout-shared';
import { 
	LaunchContent, 
	LaunchSection 
} from '@spacelaunch/spacelaunch/ui-shared';

/* eslint-disable-next-line */
export interface LaunchPageProps {}

// eslint-disable-next-line no-unused-vars
export function LaunchPage(props: LaunchPageProps) {
	return (
		<SpacelaunchLayout 
			heroComponent={LaunchContent} 
			contentComponent={LaunchSection} 
			settings={{
				hasHeaderLink: false
			}}/>
	);
}

export default LaunchPage;
