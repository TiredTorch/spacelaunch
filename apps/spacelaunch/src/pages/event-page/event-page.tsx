import { SpacelaunchLayout } from '@spacelaunch/spacelaunch/layout-shared';
import { EventContent, EventSection } from '@spacelaunch/spacelaunch/ui-shared';

/* eslint-disable-next-line */
export interface EventPageProps {}

// eslint-disable-next-line no-unused-vars
export function EventPage(props: EventPageProps) {
	return (
		<SpacelaunchLayout 
			heroComponent={EventContent} 
			contentComponent={EventSection} 
			settings={{
				hasHeaderLink: true
			}}/>
	);
}

export default EventPage;
