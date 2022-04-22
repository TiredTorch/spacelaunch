import { ListItem, Stack, styled, Typography } from '@mui/material';
import Button from '../../common/button/button';

const StyledStack = styled(Stack)(({ theme }) => ({
	position: 'absolute',
	left: '15vw',
	[theme.breakpoints.down('lg')] : {
		left: '10vw',
	},
	[theme.breakpoints.down('md')] : {
		left: '10vw',
	},
	[theme.breakpoints.down('sm')] : {
		left: '6vw',
	},
}));

export function HomeContent() {
	return (
		<StyledStack spacing={'20px'}>
			<ListItem>
				<Typography variant="h1">
          Upcoming <br/>Spaceflight Launches
				</Typography>
			</ListItem>
			<ListItem>
				<Typography variant="h5">
          View all launches available - 
          including launches from the past and utilize powerful search filters.
				</Typography>
			</ListItem>
			<ListItem>
				<Button 
					userSize="md"  
					title="Show All Launches" 
					url="/"
				/>
			</ListItem>
		</StyledStack>
	);
}

export default HomeContent;
