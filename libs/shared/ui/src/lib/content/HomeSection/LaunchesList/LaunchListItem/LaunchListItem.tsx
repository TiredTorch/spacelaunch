import { Box, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import SubtitleBox from '../../../../common/SubtitleBox/SubtitleBox';
import { assets } from '@spacelaunch/shared/assets';
import { LaunchListItemProps } from './LaunchListItem.types';

const StyledBox = styled(Box)(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '45%',
	marginTop: '30px',
	[theme.breakpoints.down('sm')] : {
		width: '80%'
	}
}));

const StyledSubtitleOverlay = styled(Box)({
	position: 'relative',
	top: '-20px',
});

export const LaunchListItem = (props: LaunchListItemProps) => {
	const img = props.img ? 
		props.img : assets.NotFoundPage;

	return (
		<StyledBox>
			<Link to={props.url}>
				<Box component={'img'} 
					src={img}
					sx={({breakpoints}) => ({
						height: '264px',
						width: '25vw',
						objectFit: 'cover',
						[breakpoints.down('sm')]: {
							width: '60vw',
						}
					})}
				/>
			</Link>
			<StyledSubtitleOverlay>
				<SubtitleBox 
					title={
						dayjs(props.dataTitle).format('MMM. D, YYYY, H:mm a')
					}
				/>
			</StyledSubtitleOverlay>
			<Link to={props.url} style={{
				textDecoration: 'none', color: '#F1EBFF'
			}}>
				<Typography variant="h2" marginBottom={'20px'}>
					{props.launchTitle}
				</Typography>
			</Link>
		</StyledBox>
	);
};

export default LaunchListItem;
