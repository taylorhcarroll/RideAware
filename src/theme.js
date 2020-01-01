import blueGrey from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#03a9f4'
        },
        secondary: {
            main: '#ffc107'
        },
        error: {
            main: '#FF5C5C',
          },
        background: {
            default: '#FFF'
        }
    }
});

export default theme;