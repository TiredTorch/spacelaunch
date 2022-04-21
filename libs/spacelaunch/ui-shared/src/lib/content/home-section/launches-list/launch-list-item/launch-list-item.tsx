import { Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SubtitleBox from '../../../../common/subtitle-box/subtitle-box';

/* eslint-disable-next-line */
export interface LaunchListItemProps {
  url: string,
  img: string,
  dataTitle: Date,
  launchTitle: string
}

const StyledBox = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '45%',
	marginTop: '50px'
});

const StyledSubtitleOverlay = styled(Box)({
	position: 'relative',
	top: '-15px',
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
						width: '100%'
					}}
				/>
			</Link>
			<StyledSubtitleOverlay>
				<SubtitleBox title={props.dataTitle.toString()}/>
			</StyledSubtitleOverlay>
			<Link to={props.url} style={{
				textDecoration: 'none', color: '#F1EBFF'
			}}>
				<Typography variant="h2">
					{props.launchTitle}
				</Typography>
			</Link>
		</StyledBox>
	);
}

export default LaunchListItem;
