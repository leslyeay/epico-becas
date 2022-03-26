import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#15b4e9',
        },
        secondary: {
            main: '#2b2994',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: [
            'Raleway'
        ],
        h1: {
            fontSize: 45,
            fontFamily: "Raleway",
            fontWeight: 700,
            color: "#2882F8",
            letterSpacing: "0.0075em",
        }
    },
});

export default theme;
