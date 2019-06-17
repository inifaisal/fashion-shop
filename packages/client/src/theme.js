import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  color: '#000',
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F5F5F5',
    },
  },
  containerMargin: 80,
});

export default theme;
