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
         src="https://media.licdn.com/dms/image/C4D03AQHXrf3XNnfWKA/profile-displayphoto-shrink_200_200/0?e=1556150400&v=beta&t=Jl-iwmGmfQIHYFvkS107D0p8zUB3WqXHSxopSQ9dK7U"
         className={classes.avatar}
         />
    );
}

export default withStyles(styles)(AvatarComponent);