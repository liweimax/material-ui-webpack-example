import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  statusBar:{
    //bottom:0,
    //position: 'absolute',
    //height: 60,
    backgroundColor: theme.palette.common.white,
  }
});

function doSomething(event) {
  // eslint-disable-next-line no-console
  console.log(event.currentTarget.getAttribute('data-something'));
}

function StatusBar(props) {
  const { classes } = props;
  return (
    <div className={classes.statusBar}>
      <Button className={classes.button}>Default</Button>
      <Button color="primary" className={classes.button}>
        Primary
      </Button>
      <Button color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button disabled className={classes.button}>
        Disabled
      </Button>
      <Button href="#flat-buttons" className={classes.button}>
        Link
      </Button>
    </div>
  );
}

StatusBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusBar);

