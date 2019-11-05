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
            main: red.A400
        },
        background: {
            default: '#FFF'
        }
    }
});

export default theme;