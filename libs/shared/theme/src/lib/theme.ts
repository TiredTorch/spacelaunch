import { createTheme } from '@mui/material';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 550,
			sm: 768,
			md: 1024,
			lg: 1200,
			xl: 1536
		}
	},
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
	fontSize: '4.75rem',
	[theme.breakpoints.down('md')] : {
		fontSize: '3.75rem',
	},
	[theme.breakpoints.down('sm')] : {
		fontSize: '3rem',
	}
};
theme.typography.h2 = {
	fontSize: '1.625rem',
	fontWeight: 700,
};
theme.typography.h3 = {
	fontSize: '3.375rem',
	fontWeight: 700,
	[theme.breakpoints.down('md')] : {
		fontSize: '3rem',
	},
	[theme.breakpoints.down('xs')] : {
		fontSize: '2.5rem',
	},
};
theme.typography.h4 = {
	fontSize: '3.375rem',
	fontWeight: 700,
	[theme.breakpoints.down('md')] : {
		fontSize: '2rem',
	},
	[theme.breakpoints.down('xs')] : {
		fontSize: '1.7rem',
	},
	'&.detail' : {
		fontSize: '3.375rem',
	}
};
theme.typography.h5 = {
	fontSize: '1.063rem',
	'&.detail' : {
		[theme.breakpoints.down('md')] : {
			fontSize: '1.6rem',
		}
	}
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