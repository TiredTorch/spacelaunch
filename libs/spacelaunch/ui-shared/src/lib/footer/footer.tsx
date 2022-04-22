import { Box, styled, Typography } from '@mui/material';
import Logo from '../common/logo/logo';


const StyledBox = styled(Box)(({ theme }) => ({
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
				src="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png"
			/>
			<StyledCopyrights variant="h5">
        © 2021 Copyright
			</StyledCopyrights>
		</StyledBox>
	);
}

export default Footer;
