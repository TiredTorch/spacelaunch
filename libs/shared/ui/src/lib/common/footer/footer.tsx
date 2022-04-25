import { Box, styled, Typography } from '@mui/material';
import Logo from '../logo/logo';
import LogoImage from '../../../../../../shared/assets/assets/logo/Logo.svg';


const StyledBox = styled(Box)(() => ({
	width: '100vw',
	height: '5vh',

	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	marginBottom: '5vh'
}));
const StyledCopyrights = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary
}));

export function Footer() {
	return (
		<StyledBox>
			<Logo
				logoSize='sm'
				src={LogoImage}
			/>
			<StyledCopyrights variant="h5">
        © 2021 Copyright
			</StyledCopyrights>
		</StyledBox>
	);
}

export default Footer;
