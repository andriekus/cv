import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from'@material-ui/core/styles';
import MainPage from '../homePage/MainPage';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff6f00'
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
            <div className="page">
                <MainPage />
            </div>
    </MuiThemeProvider>
);