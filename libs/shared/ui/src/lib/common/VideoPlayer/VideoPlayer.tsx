import { VideoPlayedProps } from './VideoPlayer.types';
import ReactPlayer from 'react-player';

export const VideoPlayer = (props: VideoPlayedProps) => {
	return (
		<ReactPlayer 
			url={props.videoSrc} controls={true}
			width='80%' height={'70vmin'}
			
		/>
	);
};

export default VideoPlayer;
