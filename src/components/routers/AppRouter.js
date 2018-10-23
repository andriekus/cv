import React from 'react';
import { createMuiTheme, MuiThemeProvider } from'@material-ui/core/styles';
import MainPage from '../homePage/MainPage';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF6500'
        },
        secondary: {
            main:'#FFFFFF'
        }
    },
    typography: {
        useNextVariants: true
    }
});

export default () => (
    <MuiThemeProvider theme={theme}>
            <div>
                <MainPage />
            </div>
    </MuiThemeProvider>
);