import { Box, Stack, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { 
	useGetEventQuery 
} from '@spacelaunch/redux/store';
import { useParams } from 'react-router';
import InfoString from '../../common/InfoString/InfoString';
import Loading from '../../common/Loading/Loading';
import SubtitleBox from '../../common/SubtitleBox/SubtitleBox';
import VideoPlayer from '../../common/VideoPlayer/VideoPlayer';
import EventList from '../HomeSection/EventList/EventList';

const StyledStack = styled(Stack)(({ theme }) => ({
	alignItems: 'center',
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

export const EventSection = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetEventQuery(`${id}`);

	return (
		isLoading ?
			<Loading/> :
			<StyledStack>
				{data?.video_url ?
					<VideoPlayer videoSrc={data?.video_url}/> : <></>
				} 
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
							title={
								dayjs(data?.date).format('MMM. D, YYYY, H:mm a')
							??'Not found'}
						/>
						<InfoString 
							title={'Destination'} 
							info={
								data?.launches[0]
									.mission.orbit.name??'Not found'
							}
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
};

export default EventSection;
