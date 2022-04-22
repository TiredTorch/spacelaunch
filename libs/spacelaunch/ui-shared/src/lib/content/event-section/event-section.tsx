import { Box, Stack, styled, Typography } from '@mui/material';
import { 
	useGetEventQuery 
} from 'libs/spacelaunch/store-shared/src/lib/eventpage/eventpageApi';
import { useParams } from 'react-router';
import InfoString from '../../common/info-string/info-string';
import SubtitleBox from '../../common/subtitle-box/subtitle-box';
import VideoPlayer from '../../common/video-player/video-player';
import EventList from '../home-section/event-list/event-list';

const StyledStack = styled(Stack)({
	justifyContent: 'space-around'
});

const StyledInformationWrapper = styled(Stack)({
	margin: '60px auto',
	flexDirection: 'row',
	justifyContent: 'space-around'
});

export function EventSection() {
	const { id } = useParams();
	const { data } = useGetEventQuery(`${id}`);

	return (
		<StyledStack>
			{data?.video_url ?
				<VideoPlayer videoSrc={data?.video_url}/> : ''
			}
			<StyledInformationWrapper>
				<Box component={'img'} 
					src={data?.launches[0].image}
					sx={{
						height: '300px',
						width: '50%'
					}}
				/>
				<StyledStack sx={{width: '40%'}}>
					<Typography variant="h2">
						{data?.name}
					</Typography>
					<SubtitleBox title={data?.date.toString()??'Not found'}/>
					<InfoString 
						title={'Destination'} 
						info={data?.launches[0].mission.orbit.name??'Not found'}
					/>
					<InfoString 
						title={'Mission'} 
						info={data?.launches[0].mission.type??'Not found'}
					/>
					<Typography variant="h5">
						{data?.launches[0].mission.description}
					</Typography>
				</StyledStack>
			</StyledInformationWrapper>
			<EventList/>
		</StyledStack>
	);
}

export default EventSection;
