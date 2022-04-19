import { createTheme } from "@mui/material";

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
  }
})

theme.typography.fontFamily = 'Montserrat'

theme.components= {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        overflowX: 'hidden',
        backgroundColor: theme.palette.primary.main,
      }
    }
  }
}

export default theme;