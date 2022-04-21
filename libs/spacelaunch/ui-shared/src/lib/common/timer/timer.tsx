import { Box, styled, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface TimerProps {
  time: string | undefined
}

const StyledBox = styled(Box)(() => ({
	width: '40vw',
	height: '200px',
	background: '#4A00E0',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}));

export function Timer(props: TimerProps) {
	return (
		<StyledBox>
			<Typography variant="h1" align='center'>
				{props.time??'Not found'}
			</Typography>
		</StyledBox>
	);
}

export default Timer;
