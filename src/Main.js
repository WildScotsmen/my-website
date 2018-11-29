import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SocialMedia from './component/SocialMedia';
import MovieQuote from './component/MovieQuote';
import ContactForm from './component/ContactForm';

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
        backgroundColor: theme.palette.background.paper,
    },
});

class ScrollableTabsButtonAuto extends React.Component {
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
                        <Tab label="Home" />
                        <Tab label="Movie Quote" />
                        <Tab label="Contact" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>{<SocialMedia />}</TabContainer>}
                {value === 1 && <TabContainer>{<MovieQuote />}</TabContainer>}
                {value === 2 && <TabContainer>{<ContactForm />}</TabContainer>}
            </div>
                );
            }
        }
        
ScrollableTabsButtonAuto.propTypes = {
                    classes: PropTypes.object.isRequired,
            };
            
export default withStyles(styles)(ScrollableTabsButtonAuto);