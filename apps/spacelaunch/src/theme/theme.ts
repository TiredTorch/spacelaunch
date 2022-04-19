import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      secondary: '#F1EBFF'
    }
  }
})

theme.typography.fontFamily = 'Montserrat'

theme.components= {
  MuiCssBaseline: {
    styleOverrides: {
      root: {
        overflowX: 'hidden'
      }
    }
  }
}

export default theme;