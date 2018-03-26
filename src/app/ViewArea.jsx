import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    viewArea: {
        backgroundColor: theme.palette.common.black,
        width:'100%',
        bottom:20,
        top:88,
        position:'absolute'
    }
});

function ViewArea(props) {
    const { classes } = props;
    return (
        <div className={classes.viewArea}>
            
        </div>
  );
}

ViewArea.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ViewArea);