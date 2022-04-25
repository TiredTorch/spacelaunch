import { ListItem, Stack, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { 
	useGetLaunchQuery 
} from 'libs/redux/store/src/lib/launchpage/launchpageApi';
import { useParams } from 'react-router';
import Timer from '../../common/timer/timer';

const StyledStack = styled(Stack)(({ theme }) => ({
	width: '80vw',
	[theme.breakpoints.down('lg')] : {
		width: '90vw'
	},
	[theme.breakpoints.down('md')] : {
		width: '100vw'
	},
}));
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
		<StyledStack
			spacing={{xl: '30px', lg: '30px', md: '50px', sm: '20px'}}
		>
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
				<Timer 
					time={
						dayjs(data?.last_updated).format('MMM. D, YYYY, H:m a')
					}
				/>
			</StyledListItem>
		</StyledStack>
	);
}

export default LaunchContent;
