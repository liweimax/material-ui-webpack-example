import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import SimpleTabs from './SimpleTabs';
import CustomizedTable from './CustomizedTable';
import StatusBar from './StatusBar';
import ViewArea from './ViewArea'

const styles = theme => ({
    main: {
        height:'100%',
        position:'relative'
    }
});

function Main(props) {
    const { classes } = props;
    return (
        <div className={classes.main}>
            <SimpleTabs />
            <ViewArea/>
            <StatusBar/>
        </div>
  );
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Main);

