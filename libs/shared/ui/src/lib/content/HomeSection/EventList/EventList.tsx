import { Button, Stack, styled, Typography } from '@mui/material';
import { 
	useGetUpcomingEventsQuery,
} from 'libs/redux/store/src/lib/homepage/homepageApi';
import { useState } from 'react';
import EventListItem from './EventListItem/EventListItem';

const StyledStackRow = styled(Stack)(({theme}) => ({
	flexDirection: 'row',
	justifyContent: 'space-between',
	margin: '0 0 20px 0',
	'&.main' : {
		[theme.breakpoints.down('sm')] : {
			flexDirection: 'column'
		}
	}
}));

const StyledStackColumn = styled(Stack)(() => ({
	flexDirection: 'column',
	justifyContent: 'space-around',
	margin: '0 0 60px 0',
	
}));

const StyledArrowButton = styled(Button)({
	color: 'white',
	marginRight: '10px'
});

export const EventList = () => {

	const [page, setPage] = useState(0);
	// eslint-disable-next-line 
	const { data, isLoading, error } = useGetUpcomingEventsQuery(page);

	const currentEventListItems = data?.results;

	const handleNextPage = () => {
		if (!data?.next) return;

		setPage(page + 1);
	};
	const handlePrevPage = () => {
		if (!data?.previous) return;

		setPage(page - 1);
	};

	return (
		<StyledStackColumn>
			<StyledStackRow>
				<Typography variant="h3">
          Recent Events
				</Typography>
				<StyledStackRow>
					<StyledArrowButton onClick={handlePrevPage}>
						<Typography variant="h3">
              ←
						</Typography>
					</StyledArrowButton>
					<StyledArrowButton onClick={handleNextPage}>
						<Typography variant="h3">
              →
						</Typography>
					</StyledArrowButton>
				</StyledStackRow>
			</StyledStackRow>
			<StyledStackRow  className='main'>
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
};

export default EventList;
