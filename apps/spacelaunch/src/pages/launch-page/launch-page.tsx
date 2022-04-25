import { SpacelaunchLayout } from '@spacelaunch/shared/layout';
import { 
	LaunchContent, 
	LaunchSection 
} from '@spacelaunch/shared/ui';
import { 
	useGetLaunchQuery 
} from 'libs/redux/store/src/lib/launchpage/launchpageApi';
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
