import { Box, Stack, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SubtitleBox from '../../../../common/subtitle-box/subtitle-box';

/* eslint-disable-next-line */
export interface EventListItemProps {
  url: string,
  img: string | null,
  dataTitle: Date,
  eventTitle: string
}

const StyledStack = styled(Stack)({
	width: '30%'
});

export function EventListItem(props: EventListItemProps) {

	const img = props.img ? 
		props.img : 
		// eslint-disable-next-line max-len
		'https://plasticsurgery-ua.org/wp-content/uploads/2016/11/default-placeholder.png';

	return (
		<StyledStack spacing={'15px'}>
			<Link to={props.url}>
				<Box component={'img'} 
					src={img}
					sx={{
						height: '264px',
						width: '100%'
					}}
				/>
			</Link>
      
			<SubtitleBox title={props.dataTitle.toString()}/>
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
}

export default EventListItem;
