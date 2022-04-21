import { Box, styled, Typography } from '@mui/material';
import { 
	useGetUpcomingEventsQuery 
} from 'libs/spacelaunch/store-shared/src/lib/homepage/homepageApi';
import LaunchListItem from './launch-list-item/launch-list-item';

const StyledBox = styled(Box)({
	marginTop: '20px',

	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-evenly',
});

export function LaunchesList() {

  
	// eslint-disable-next-line 
	const { data, isLoading, error } = useGetUpcomingEventsQuery();
  
	const currentLaunchListItems = data?.results.slice(0, 6);

	return (
		<StyledBox>
			<Typography variant="h3" align="center" width={'100%'}>
        Spaceflight Launches
			</Typography>
			{currentLaunchListItems?.map((item) => (
				<LaunchListItem 
					url={`/launch/${item.id}`}
					dataTitle={item.date}
					launchTitle={item.name}
					key={`route ${item.id}`} 
					img={item.feature_image}		
				/>
			))}
		</StyledBox>
	);
}

export default LaunchesList;
