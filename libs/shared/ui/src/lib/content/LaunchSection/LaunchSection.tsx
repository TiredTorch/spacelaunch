import { Stack, styled, Typography } from '@mui/material';
import { Button } from '@spacelaunch/shared/ui';
import InfoString from '../../common/InfoString/InfoString';
import { 
	useGetLaunchQuery 
} from '@spacelaunch/redux/store';
import { useParams } from 'react-router';
import VideoPlayer from '../../common/VideoPlayer/VideoPlayer';
import Loading from '../../common/Loading/Loading';

const StyledStack = styled(Stack)({
	margin: '30px 0',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
});
export const LaunchSection = () => {

	const { id } = useParams();
	const { data, isLoading } = useGetLaunchQuery(`${id}`);

	return (
		isLoading ?
			<Loading/> :
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
						data?.mission?.type??'-'
					}/>
					<Typography variant="h5" 
						align="center" marginTop={'20px'} width={'100%'}
						padding={{lg: '0 200px', md: '0 100px', xs: '0 100px'}}>
						{data?.mission?.description??'Not found'}
					</Typography>
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
						align="center" 
						margin={'20px 0'} 
						padding={{lg: '0 200px', md: '0 100px', xs: '0 100px'}}
					>
						{data?.rocket.configuration.description??'Not found'}
					</Typography>
					<Button userSize={'rp'} 
						title={'See Rocket Details'} 
						url={`/rocket/${data?.rocket.configuration.id}`}
					/>
				</StyledStack>
				{/* <CardMedia
				component={'iframe'} 
				src="https://maps.google.com/maps?q='28.56194122',
				'-80.57735736'&hl=es&z=14&amp;output=embed" 
				loading="lazy"
				sx={{
					margin: '100px auto 0',
					width: '1180px',
					height: '492px',
					border: 'none'
				}}
			/> */}
			</StyledStack>
	);
};

export default LaunchSection;
