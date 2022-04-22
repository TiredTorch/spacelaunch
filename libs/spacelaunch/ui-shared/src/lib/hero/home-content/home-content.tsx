import { ListItem, Stack, styled, Typography } from '@mui/material';
import Button from '../../common/button/button';

const StyledStack = styled(Stack)({

});

export function HomeContent() {
	return (
		<StyledStack spacing='30px'>
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
