import { CardMedia, ListItem, Stack, styled, Typography } from '@mui/material';
import Button from '../../common/button/button';
import SubtitleBox from '../../common/subtitle-box/subtitle-box';
import VideoPlayer from '../../common/video-player/video-player';
import InfoString from '../../common/info-string/info-string';
import { 
	useGetLaunchQuery 
} from 'libs/spacelaunch/store-shared/src/lib/launchpage/launchpageApi';
import { useParams } from 'react-router';

const StyledStack = styled(Stack)({
	margin: '30px 0',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
});
const SubtitleWrapper = styled(Stack)({
	width: '70%',
	padding: '0',
	flexWrap: 'wrap',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-evenly'
});
const SubtitleItem = styled(ListItem)({
	width: '33%',
	margin: '0',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});

export function LaunchSection() {

	const { id } = useParams();
	const { data } = useGetLaunchQuery(`${id}`);

	return (
		<StyledStack>
			{data?.vidURLs?.length ? 
				<VideoPlayer videoSrc={data?.vidURLs[0].url}/> : ''
			}
			<StyledStack>
				<Typography variant="h3">
          Overview
				</Typography>
				<InfoString 
					title={'Destination'} 
					info={
						data?.rocket?.spacecraft_stage ? 
							data?.rocket?.spacecraft_stage.destination :
							'-'
					}
				/>
				<InfoString title={'Mission'} info={
					data?.mission.type??'-'
				}/>
				<SubtitleWrapper>
					<SubtitleItem>
						<SubtitleBox title={'Text'}/>
					</SubtitleItem>
					<SubtitleItem>
						<SubtitleBox title={'Text'}/>
					</SubtitleItem>
					<SubtitleItem>
						<SubtitleBox title={'Text'}/>
					</SubtitleItem>
					<SubtitleItem>
						<SubtitleBox title={'Text'}/>
					</SubtitleItem>
					<Typography variant="h5" 
						align="center" marginTop={'20px'} width={'100%'}>
						{data?.mission.description??'Not found'}
					</Typography>
				</SubtitleWrapper>
			</StyledStack>
			<StyledStack>
				<Typography variant="h3">
					{data?.rocket.configuration.full_name??'Not found'}
				</Typography>
				<InfoString title={'Family'} info={
					data?.rocket.configuration.family??'-'
				}/>
				<InfoString title={'Configuration'} info={
					data?.rocket.configuration.name??'-'
				}/>
				<Typography variant="h5" 
					align="center" margin={'20px 0'} padding={'0 200px'}
				>
					{data?.rocket.configuration.description??'Not found'}
				</Typography>
				<Button userSize={'md'} 
					title={'See Rocket Details'} 
					url={`/rocket/${data?.rocket.configuration.id}`}
				/>
			</StyledStack>
			<CardMedia
				component={'iframe'} 
				src="https://maps.google.com/maps?q='28.56194122','-80.57735736'&hl=es&z=14&amp;output=embed" 
				loading="lazy"
				sx={{
					margin: '100px auto 0',
					width: '1180px',
					height: '492px',
					border: 'none'
				}}
			/>
		</StyledStack>
	);
}

export default LaunchSection;
