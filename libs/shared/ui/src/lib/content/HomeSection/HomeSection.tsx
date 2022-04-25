import { Stack } from '@mui/material';
import EventList from './EventList/EventList';
import LaunchesList from './LaunchesList/LaunchesList';

export const HomeSection = () => {
	return (
		<Stack>
			<EventList/>
			<LaunchesList/>
		</Stack>
	);
};

export default HomeSection;
