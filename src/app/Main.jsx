import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import SimpleTabs from './SimpleTabs';
import CustomizedTable from './CustomizedTable';
import StatusBar from './StatusBar';
import ViewArea from './ViewArea'

function Main(props) {

    return (
        <div>
            <SimpleTabs />
            <ViewArea/>
            <StatusBar/>
        </div>
  );
}
           //<CustomizedTable />
export default Main;

