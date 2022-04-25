import { Box, styled, Typography } from '@mui/material';

export interface TimerProps {
  time: string | undefined
}

const StyledBox = styled(Box)(({ theme }) => ({
	width: '40vw',
	height: '200px',
	background: '#4A00E0',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	
	[theme.breakpoints.down('lg')] : {
		width: '50vw',
	},
	[theme.breakpoints.down('md')] : {
		width: '60vw',
	},
	[theme.breakpoints.down('sm')] : {
		width: '70vw',
	},
	[theme.breakpoints.down('xs')] : {
		width: '80vw',
	},
}));

export function Timer(props: TimerProps) {
	return (
		<StyledBox>
			<Typography variant="h4" align='center'>
				{props.time??'Not found'}
			</Typography>
		</StyledBox>
	);
}

export default Timer;
