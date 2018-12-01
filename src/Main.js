import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Contact from './page/Contact';
import Quote from './page/Quote';
import Home from './page/Home';
import HomeIcon from '@material-ui/icons/Home';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies'
import EmailIcon from '@material-ui/icons/Email';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class Main extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                        scrollable
                        scrollButtons="auto"
                    >
                        <Tab icon={<HomeIcon />} label="Home" />
                        <Tab icon={<LocalMoviesIcon />} label="Quote" />
                        <Tab icon={<EmailIcon />} label="Contact" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>{<Home />}</TabContainer>}
                {value === 1 && <TabContainer>{<Quote />}</TabContainer>}
                {value === 2 && <TabContainer>{<Contact />}</TabContainer>}
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);