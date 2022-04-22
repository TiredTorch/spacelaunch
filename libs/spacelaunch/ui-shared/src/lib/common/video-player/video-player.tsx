import { CardMedia } from '@mui/material';

export interface VideoPlayedProps {
  videoSrc: string 
}

export function VideoPlayer(props: VideoPlayedProps) {
	return (
		<CardMedia 
			component={'iframe'} 
			src={`${props.videoSrc}&output=embed`}
			loading="lazy"
			allow="accelerometer"
			sx={{
				margin: 'auto',
				width: '1180px',
				height: '711px',
				border: 'none'
			}}
			
		/>
	);
}

export default VideoPlayer;
