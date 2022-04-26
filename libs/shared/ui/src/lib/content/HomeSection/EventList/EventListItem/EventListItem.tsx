import { Box, Stack, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import SubtitleBox from '../../../../common/SubtitleBox/SubtitleBox';
import { EventListItemProps } from './EventListItem.types';
import { assets } from '@spacelaunch/shared/assets';


const StyledStack = styled(Stack)(({ theme }) => ({
	width: '30%',
	[theme.breakpoints.down('sm')] : {
		alignItems: 'center',
		width: '90%',
		margin: 'auto',
		'&:after' : {
			display: 'block',
			content: '""',
			height: '3px',
			width: '90%',
			backgroundColor: 'white',
			margin: '20px auto'
		}

	}
}));

export const EventListItem = (props: EventListItemProps) => {

	const img = props.img ? 
		props.img : assets.NotFoundPage;

	return (
		<StyledStack spacing={'15px'}>
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
      
			<SubtitleBox 
				title={dayjs(props.dataTitle).format('MMM. D, YYYY, H:mm a')}
			/>
			<Link to={props.url} style={{
				textDecoration: 'none',
				color: '#F1EBFF'
			}}>
				<Typography variant="h2">
					{props.eventTitle}
				</Typography>
			</Link>
		</StyledStack>
	);
};

export default EventListItem;
