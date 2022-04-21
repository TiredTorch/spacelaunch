import { ListItem, Stack, styled, Typography } from '@mui/material';
import Timer from '../../common/timer/timer';

/* eslint-disable-next-line */
export interface LaunchContentProps {}

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

export function LaunchContent(props: LaunchContentProps) {
	return (
		<StyledStack spacing='30px'>
			<StyledListItem>
				<StyledTypography variant="h1">
          Upcoming Spaceflight Launches
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<StyledTypography variant="h2">
          Go for launch
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<Timer/>
			</StyledListItem>
		</StyledStack>
	);
}

export default LaunchContent;
