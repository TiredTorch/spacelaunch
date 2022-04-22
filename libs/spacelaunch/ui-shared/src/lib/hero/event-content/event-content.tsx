import { ListItem, Stack, styled, Typography } from '@mui/material';
import { 
	useGetEventQuery 
} from 'libs/spacelaunch/store-shared/src/lib/eventpage/eventpageApi';
import { useParams } from 'react-router';
import Button from '../../common/button/button';
import SubtitleBox from '../../common/subtitle-box/subtitle-box';

const StyledStack = styled(Stack)(({ theme }) => ({
	width: '40vw',
	[theme.breakpoints.down('lg')] : {
		width: '70vw'
	},
	[theme.breakpoints.down('md')] : {
		width: '80vw'
	},
	[theme.breakpoints.down('sm')] : {
		width: '90vw'
	},
}));
const StyledListItem = styled(ListItem)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});
const StyledTypography = styled(Typography)({
	textAlign: 'center',
});

export function EventContent() {
	const { id } = useParams();

	const { data } = useGetEventQuery(`${id}`);

	return (
		<StyledStack 
			spacing={{
				xl: '30px', 
				lg: '20px', 
				md: '30px', 
				sm: '20px', 
				xs: '10px'
			}}>
			<StyledListItem>
				<StyledTypography variant="h1">
					{data?.name ??'Not found'}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<SubtitleBox title={data?.date.toString()??'Not found'}/>
			</StyledListItem>
			<StyledListItem>
				<StyledTypography variant="h5">
					{data?.description??'Not found'}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<Button userSize={'md'} title={'Read On Site'} url={''}/>
			</StyledListItem>
		</StyledStack>
	);
}

export default EventContent;
