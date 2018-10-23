import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    avatar: {
        width: 130,
        height: 130
    }
};

function AvatarComponent(props) {
    const { classes } = props;
    return (
        <Avatar 
         alt="Justinas Andriekus"
         src="https://scontent.fvno3-1.fna.fbcdn.net/v/t1.0-9/17553959_1271831666270690_8022462577852088696_n.jpg?_nc_cat=100&oh=06176471461371da2c3c1d403ce6f68f&oe=5C5840BC"
         className={classes.avatar}
         />
    );
}

export default withStyles(styles)(AvatarComponent);