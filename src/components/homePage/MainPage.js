import React from 'react';
import HomePage from './homePageComponents/HomePage';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: 0,
        paddingBottom: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        [theme.breakpoints.between('xs', 'lg')]: {
            paddingTop: '0',
            paddingBottom: '0',
            paddingRight: '0',
            paddingLeft: '0'
        }
    }
});

function Sheet(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={6}>
                <HomePage />
            </Paper>
        </div>
    );
}

export default withStyles(styles)(Sheet);