import { SpacelaunchLayout } from '@spacelaunch/spacelaunch/layout-shared';
import { 
	LaunchContent, 
	LaunchSection 
} from '@spacelaunch/spacelaunch/ui-shared';
import { 
	useGetLaunchQuery 
} from 'libs/spacelaunch/store-shared/src/lib/launchpage/launchpageApi';
import { useParams } from 'react-router';

export function LaunchPage() {
	
	const { id } = useParams();
	const { data } = useGetLaunchQuery(`${id}`);
	
	return (
		<SpacelaunchLayout 
			heroComponent={LaunchContent} 
			contentComponent={LaunchSection} 
			settings={{
				hasHeaderLink: true,
				bg: data?.image
			}}/>
	);
}

export default LaunchPage;
