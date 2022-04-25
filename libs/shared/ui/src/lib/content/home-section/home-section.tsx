import { Stack } from '@mui/material';
import EventList from './event-list/event-list';
import LaunchesList from './launches-list/launches-list';

/* eslint-disable-next-line */
export interface HomeSectionProps {}

// eslint-disable-next-line no-unused-vars
export function HomeSection(props: HomeSectionProps) {
	return (
		<Stack>
			<EventList/>
			<LaunchesList/>
		</Stack>
	);
}

export default HomeSection;
