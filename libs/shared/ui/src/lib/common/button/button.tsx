import { styled, Typography } from '@mui/material';
import { Button as MUIButton } from '@mui/material';
import { useNavigate } from 'react-router';

/* eslint-disable-next-line */
export interface ButtonProps {
  userSize: 'sm' | 'md' | 'rp',
  title: string,
  url?: string
	handler?: () => void
}

const StyledTypography = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	lineHeight: '20px'
}));

const StyledButton = styled(MUIButton)(() => ({
	textTransform: 'none',
	borderRadius: '50px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}));

const StyledButtonMD = styled(StyledButton)(() => ({
	padding: '30px 80px',
	width: '359px',
	height: '80px',
	background: 'linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)',
}));

const StyledButtonSM = styled(StyledButton)({
	padding: '10px 20px',
	width: '256px',
	height: '38px',
	background: 'linear-gradient(94.97deg, #8E2DE2 3.92%, #4A00E0 52.92%)',
});

const StyledButtonResp = styled(StyledButton)(({ theme }) => ({
	padding: '30px 80px',
	width: '359px',
	height: '80px',
	background: 'linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)',
	[theme.breakpoints.down('sm')] : {
		padding: '10px 50px',
		width: '259px',
		height: '40px',
	}
}));



export function Button(props: ButtonProps) {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(props.url??'');
	}; 

	const handleAction = 
		props.url ? handleRedirect : 
			(props.handler ? props.handler : () => '');


	switch (props.userSize) {
	case 'sm':
		return (
			<StyledButtonSM variant="contained">
				<StyledTypography fontSize='20px' fontWeight={500}>
					{props.title}
				</StyledTypography>
			</StyledButtonSM>
		);
	case 'md':
		return (
			<StyledButtonMD variant="contained" onClick={handleAction}>
				<StyledTypography fontSize='20px' fontWeight={700}>
					{props.title}
				</StyledTypography>
			</StyledButtonMD>
		);
	case 'rp':
		return (
			<StyledButtonResp 
				variant="contained" 
				onClick={
					handleAction
				}
			>
				<StyledTypography fontSize='20px' fontWeight={500}>
					{props.title}
				</StyledTypography>
			</StyledButtonResp>
		);
	
	default:
		return (
			<h1>Smth went wrong</h1>
		);
	}
}

export default Button;