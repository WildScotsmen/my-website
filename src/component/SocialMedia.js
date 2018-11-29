import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class ListItemLink extends React.Component {
    render() {
        return (
            <ListItem button component="a" {...this.props} />
        );
    }
}

class SocialMedia extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItemLink target="_blank" href="https://twitter.com/otterdork">
                        <ListItemText style={{ textAlign: 'center' }} primary="Twitter" />
                    </ListItemLink>
                    <Divider />
                    <ListItemLink target="_blank" href="https://thewildscotsmen.tumblr.com/">
                        <ListItemText style={{ textAlign: 'center' }} primary="Tumblr" />
                    </ListItemLink>
                    <Divider />
                    <ListItemLink target="_blank" href="https://github.com/WildScotsmen/">
                        <ListItemText style={{ textAlign: 'center' }} primary="GitHub" />
                    </ListItemLink>
                </List>
            </div>
        );
    }
}

SocialMedia.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialMedia);