import { Box, Stack, styled, Typography } from '@mui/material';
import { 
	useGetEventQuery 
} from 'libs/spacelaunch/store-shared/src/lib/eventpage/eventpageApi';
import { useParams } from 'react-router';
import InfoString from '../../common/info-string/info-string';
import SubtitleBox from '../../common/subtitle-box/subtitle-box';
import EventList from '../home-section/event-list/event-list';

const StyledStack = styled(Stack)(({ theme }) => ({
	justifyContent: 'space-around',
	'&.innerStack': {
		width: '40%',
		[theme.breakpoints.down('md')] : {
			width: '80%',
			alignItems: 'center'
		}
	}
}));

const StyledInformationWrapper = styled(Stack)(({theme}) => ({
	margin: '60px 0',
	flexDirection: 'row',
	justifyContent: 'space-around',
	alignItems: 'center',
	[theme.breakpoints.down('md')] : {
		flexDirection: 'column',
	}
}));

export function EventSection() {
	const { id } = useParams();
	const { data } = useGetEventQuery(`${id}`);

	return (
		<StyledStack>
			{/* {data?.video_url ?
				<VideoPlayer videoSrc={data?.video_url}/> : ''
			} */}
			<StyledInformationWrapper>
				<Box component={'img'} 
					src={data?.launches[0].image}
					sx={{
						height: '300px',
						width: '50%',
						margin: '20px 0',
						objectFit: 'cover'
					}}
				/>
				<StyledStack className='innerStack'>
					<Typography variant="h2" margin={'15px 0'}>
						{data?.name}
					</Typography>
					<SubtitleBox 
						title={data?.date.toString()??'Not found'}
					/>
					<InfoString 
						title={'Destination'} 
						info={data?.launches[0].mission.orbit.name??'Not found'}
					/>
					<InfoString 
						title={'Mission'} 
						info={data?.launches[0].mission.type??'Not found'}
					/>
					<Typography variant="h5" margin={'15px 0'}>
						{data?.launches[0].mission.description}
					</Typography>
				</StyledStack>
			</StyledInformationWrapper>
			<EventList/>
		</StyledStack>
	);
}

export default EventSection;
