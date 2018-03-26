import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  statusBar:{
    bottom:0,
    height:20,
    width:'100%',
    position: 'absolute',
    //height: 60,
    paddingTop:5,
    backgroundColor: '#002884',
    color: theme.palette.common.white,
    
  },
});


class StatusBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'HELLO LIWEI.MA',
			x: '12342.23',
			y:'34234.33',
			unit:'mm'
    };
  }

  render() {
    const { classes } = this.props;
    return (
      
      <div className={classes.statusBar}>
        <span style={{paddingLeft:10}}> {this.state.name}</span>
        <div style={{float: 'right', paddingRight:10}}>
          <span className='status-span-right'>| UNIT: {this.state.unit}</span>
          <span className='status-span-right'>  | POSITION: {this.state.x}, {this.state.y}</span>
        </div>
      </div>
    );
  }
}

StatusBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusBar);

//export default StatusBar