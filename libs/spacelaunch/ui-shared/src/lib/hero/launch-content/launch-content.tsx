import { ListItem, Stack, styled, Typography } from '@mui/material';
import { 
	useGetLaunchQuery 
} from 'libs/spacelaunch/store-shared/src/lib/launchpage/launchpageApi';
import { useParams } from 'react-router';
import Timer from '../../common/timer/timer';

const StyledStack = styled(Stack)({
	margin: 'auto',
	width: '60vw'
});
const StyledListItem = styled(ListItem)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});
const StyledTypography = styled(Typography)({
	textAlign: 'center'
});

export function LaunchContent() {

	const { id } = useParams();
	const { data } = useGetLaunchQuery(`${id}`);

	return (
		<StyledStack spacing='30px'>
			<StyledListItem>
				<StyledTypography variant="h1">
					{data?.name}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<StyledTypography variant="h2">
					{data?.status.name}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<Timer time={data?.last_updated.toString()}/>
			</StyledListItem>
		</StyledStack>
	);
}

export default LaunchContent;
