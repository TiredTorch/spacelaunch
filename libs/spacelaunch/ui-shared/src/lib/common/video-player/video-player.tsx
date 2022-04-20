import { CardMedia } from "@mui/material";

/* eslint-disable-next-line */
export interface VideoPlayedProps {
  videoSrc: string
}

export function VideoPlayer(props: VideoPlayedProps) {
  return (
    <CardMedia 
        component={'iframe'} 
        src={props.videoSrc}
        loading="lazy"
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
