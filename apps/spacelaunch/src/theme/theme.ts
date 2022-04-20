import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		text: {
			primary: '#F1EBFF',
			secondary: '#C0C0C0'
		},
		primary: {
			main: '#181B48',
			light: '#1C2056'
		}
	},
	typography: {
		fontFamily: 'Montserrat'
	}
});

theme.typography.fontFamily = 'Montserrat';

theme.typography.h1 = {
	fontSize: '4.75rem'
};
theme.typography.h2 = {
	fontSize: '1.625rem',
	fontWeight: 700,
};
theme.typography.h3 = {
	fontSize: '3.375rem',
	fontWeight: 700,
};
theme.typography.h5 = {
	fontSize: '1.063rem'
};

theme.components= {
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				overflowX: 'hidden',
				backgroundColor: theme.palette.primary.main,
			}
		}
	}
};

export default theme;