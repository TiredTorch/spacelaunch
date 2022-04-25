import { Box, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import SubtitleBox from '../../../../common/SubtitleBox/SubtitleBox';

/* eslint-disable-next-line */
export interface LaunchListItemProps {
  url: string,
  img: string,
  dataTitle: Date,
  launchTitle: string
}

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

export function LaunchListItem(props: LaunchListItemProps) {
	const img = props.img ? 
		props.img : 
		// eslint-disable-next-line max-len
		'https://plasticsurgery-ua.org/wp-content/uploads/2016/11/default-placeholder.png';

	return (
		<StyledBox>
			<Link to={props.url}>
				<Box component={'img'} 
					src={img}
					sx={{
						height: '264px',
						width: '100%',
						objectFit: 'cover'
						
					}}
				/>
			</Link>
			<StyledSubtitleOverlay>
				<SubtitleBox 
					title={dayjs(props.dataTitle).format('MMM. D, YYYY, H:m a')}
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
}

export default LaunchListItem;
