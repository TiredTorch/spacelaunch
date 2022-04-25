import { SpacelaunchLayout } from '@spacelaunch/shared/layout';
import { EventContent, EventSection } from '@spacelaunch/shared/ui';
import { 
	useGetEventQuery 
} from 'libs/redux/store/src/lib/eventpage/eventpageApi';
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
