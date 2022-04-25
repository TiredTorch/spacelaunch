import { Box, styled, Typography } from '@mui/material';
import { Button } from '@spacelaunch/shared/ui';
import { 
	useGetUpcomingLaunchesQuery 
} from 'libs/redux/store/src/lib/homepage/homepageApi';
import { useState } from 'react';
import Loading from '../../../common/Loading/Loading';
import LaunchListItem from './LaunchListItem/LaunchListItem';

const StyledBox = styled(Box)({
	marginTop: '20px',

	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-evenly',
});

export const LaunchesList = () => {
  
	const [page, setPage] = useState(0);

	const { data, isLoading } = useGetUpcomingLaunchesQuery(page);
  
	const currentLaunchListItems = data?.results;

	
	const handleLoad = () => {
		setPage(page + 1);
	};

	return (
		isLoading ?
			<Loading/> :
			<StyledBox>
				<Typography variant="h3" align="center" width={'100%'}>
        Spaceflight Launches
				</Typography>
				{currentLaunchListItems?.map((item) => (
					<LaunchListItem 
						url={`/launch/${item.id}`}
						dataTitle={item.net}
						launchTitle={item.name}
						key={`route ${item.id}`} 
						img={item.image_url}		
					/>
				))}
				<Button 
					userSize={'rp'} 
					title={'Load More'} 
					handler={handleLoad}
				/>
			</StyledBox>
	);
};

export default LaunchesList;
