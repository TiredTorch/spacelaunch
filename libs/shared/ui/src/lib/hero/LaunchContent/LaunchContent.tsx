import { ListItem, Stack, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { 
	useGetLaunchQuery 
} from '@spacelaunch/redux/store';
import { useParams } from 'react-router';
import Timer from '../../common/Timer/Timer';
import Loading from '../../common/Loading/Loading';

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

export const LaunchContent = () => {

	const { id } = useParams();
	const { data, isLoading } = useGetLaunchQuery(`${id}`);

	return (
		isLoading ? 
			<Loading/> :
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
							dayjs(data?.window_start)
								.format('MMM. D, YYYY, H:mm a')
						}
					/>
				</StyledListItem>
			</StyledStack>
	);
};

export default LaunchContent;
