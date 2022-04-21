import { ListItem, Stack, styled, Typography } from '@mui/material';
import { 
	useGetRocketQuery 
} from 'libs/spacelaunch/store-shared/src/lib/rocketpage/rocketpageApi';
import { useParams } from 'react-router';

const StyledStack = styled(Stack)({
	margin: 'auto',
	width: '40vw'
});
const StyledListItem = styled(ListItem)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});
const StyledTypography = styled(Typography)({
	textAlign: 'center',
});

export function RocketContent() {
  
	const { id } = useParams();
	const { data } = useGetRocketQuery(`${id}`);
  
	return (
		<StyledStack spacing='10px'>
			<StyledListItem>
				<StyledTypography variant="h1">
					{data?.full_name??'Not found'}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<StyledTypography variant="h2" fontWeight={400}>
					{`${data?.launch_service_provider.name} 
          (${data?.launch_service_provider.abbrev})`}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<StyledTypography variant="h2">
					{data?.launch_service_provider.founding_year}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<StyledTypography variant="h5">
					{data?.description}
				</StyledTypography>
			</StyledListItem>
		</StyledStack>
	);
}

export default RocketContent;
