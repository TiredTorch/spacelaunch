import { Button, Stack, styled, Typography } from '@mui/material';
import { 
	useGetUpcomingEventsQuery,
} from 'libs/spacelaunch/store-shared/src/lib/homepage/homepageApi';
import EventListItem from './event-list-item/event-list-item';

/* eslint-disable-next-line */
export interface EventListProps {}

const StyledStackRow = styled(Stack)({
	flexDirection: 'row',
	justifyContent: 'space-between',
	margin: '0 0 20px 0'
});

const StyledStackColumn = styled(Stack)({
	flexDirection: 'column',
	justifyContent: 'space-around',
	margin: '0 0 60px 0'
});

const StyledArrowButton = styled(Button)({
	color: 'white',
	marginRight: '10px'
});

// eslint-disable-next-line no-unused-vars
export function EventList(props: EventListProps) {

	// eslint-disable-next-line 
	const { data, isLoading, error } = useGetUpcomingEventsQuery();

	const currentEventListItems = data?.results.slice(0, 3);

	return (
		<StyledStackColumn>
			<StyledStackRow>
				<Typography variant="h3">
          Recent Events
				</Typography>
				<StyledStackRow>
					<StyledArrowButton>
						<Typography variant="h3">
              ←
						</Typography>
					</StyledArrowButton>
					<StyledArrowButton>
						<Typography variant="h3">
              →
						</Typography>
					</StyledArrowButton>
				</StyledStackRow>
			</StyledStackRow>
			<StyledStackRow>
				{currentEventListItems?.map((item) => (
					<EventListItem
						url={`/event/${item.id}`}
						dataTitle={item.date}
						eventTitle={item.name}
						key={`event ${item.id}`} 
						img={item.feature_image}					
					/>
				))}
			</StyledStackRow>
		</StyledStackColumn>
	);
}

export default EventList;
