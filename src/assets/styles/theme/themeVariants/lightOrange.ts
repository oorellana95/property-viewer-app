import { createTheme } from '@mui/material/styles';
import { PropertyViewerTheme } from '../PropertyViewerTheme';
import { ThemesEnum } from '../ThemesEnum';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#ffa500',
      light: '#e0fffe',
      dark: '#2ededb',
      contrastText: '#000'
    },
    secondary: {
      main: '#244543',
      light: '#24706c',
      dark: '#080808',
      contrastText: '#fff'
    },
  },
  typography: {
    fontFamily: [
      'Expansive',
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
    borderRadius: 4
  }
})

const lightTheme: PropertyViewerTheme =
{
  ...muiTheme,
  key: ThemesEnum.LIGHTORANGE_THEME
}

export default lightTheme;
