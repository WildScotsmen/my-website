import React from 'react';
import Main from './Main.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        type: 'dark',
    }
});

class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Main />
            </MuiThemeProvider>
        );
    }
}

export default App;