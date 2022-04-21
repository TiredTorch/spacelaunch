import { SpacelaunchLayout } from '@spacelaunch/spacelaunch/layout-shared';
import { 
	LaunchContent, 
	LaunchSection 
} from '@spacelaunch/spacelaunch/ui-shared';

export function LaunchPage() {
	return (
		<SpacelaunchLayout 
			heroComponent={LaunchContent} 
			contentComponent={LaunchSection} 
			settings={{
				hasHeaderLink: true,
				bg: null
			}}/>
	);
}

export default LaunchPage;
