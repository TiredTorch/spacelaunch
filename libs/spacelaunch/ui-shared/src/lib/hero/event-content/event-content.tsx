import { ListItem, Stack, styled, Typography } from '@mui/material';
import { 
	useGetEventQuery 
} from 'libs/spacelaunch/store-shared/src/lib/eventpage/eventpageApi';
import { useParams } from 'react-router';
import Button from '../../common/button/button';
import SubtitleBox from '../../common/subtitle-box/subtitle-box';

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

export function EventContent() {
	const { id } = useParams();

	const { data } = useGetEventQuery(`${id}`);

	return (
		<StyledStack spacing='20px'>
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
