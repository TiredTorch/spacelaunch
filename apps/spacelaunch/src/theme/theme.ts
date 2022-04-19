import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      secondary: '#F1EBFF'
    }
  }
})

theme.typography.fontFamily = 'Montserrat'

export default theme;