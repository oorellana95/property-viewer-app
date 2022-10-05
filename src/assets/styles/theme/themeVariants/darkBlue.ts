import { createTheme } from '@mui/material/styles';
import { PropertyViewerTheme } from '../PropertyViewerTheme';
import { ThemesEnum } from '../ThemesEnum';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#0e3d55',
      light: '#0e5c55',
      dark: '#0e2240',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f9d6c5',
      light: '#f9efc5',
      dark: '#f9a089',
      contrastText: '#000'
    },
  },
  typography: {
    fontFamily: [
      'Concise',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  shape: {
    borderRadius: 0
  }
})

const darkBlue: PropertyViewerTheme =
{
  ...muiTheme,
  key: ThemesEnum.DARKBLUE_THEME
}

export default darkBlue;