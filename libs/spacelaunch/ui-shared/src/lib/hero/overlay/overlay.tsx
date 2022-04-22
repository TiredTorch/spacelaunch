import { Box, styled } from '@mui/material';

/* eslint-disable-next-line */
export interface OverlayProps {
  bg: string | null | undefined
  children: React.ReactNode
}

const StyledContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	height: '115vh',
	padding: '12vw 10vw',
	background:
   'linear-gradient(180deg, #302B63 21.88%, rgba(24, 27, 72, 0.71) 90.1%)',

	[theme.breakpoints.down('lg')] : {
		padding: '14vw 5vw',
	},
	[theme.breakpoints.down('md')] : {
		padding: '20vw 0vw',
	},
	[theme.breakpoints.down('sm')] : {
		padding: '30vw 0vw',
	},
	[theme.breakpoints.down('xs')] : {
		padding: '40vw 0vw',
	},
}));
const StyledImgContainer = styled(Box)(() => ({
	position: 'absolute',
	width: '99vw',
	height: '1080px',
	left: '0px',
	top: '0px',
	overflowX: 'hidden',
}));

export function Overlay(props: OverlayProps) {
	return (
		<>
			<StyledImgContainer sx={{
				background: 
        `linear-gradient(
          0.48deg,
          #181B48 5.64%,
          rgba(24, 27, 72, 0) 92.32%),
          url(${props.bg})`,
				backgroundSize: 'cover'
			}}/>
			<StyledContainer>
				{props.children}
			</StyledContainer>
		</>
	);
}

export default Overlay;
