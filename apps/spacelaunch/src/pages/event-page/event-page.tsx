import { SpacelaunchLayout } from '@spacelaunch/spacelaunch/layout-shared';
import { EventContent, EventSection } from '@spacelaunch/spacelaunch/ui-shared';
import { 
	useGetEventQuery 
} from 'libs/spacelaunch/store-shared/src/lib/eventpage/eventpageApi';
import { useParams } from 'react-router';

export function EventPage() {
	
	const { id } = useParams();
	const { data } = useGetEventQuery(`${id}`);
	
	return (
		<SpacelaunchLayout 
			heroComponent={EventContent} 
			contentComponent={EventSection} 
			settings={{
				hasHeaderLink: true,
				bg: data?.launches[0].image
			}}/>
	);
}

export default EventPage;
