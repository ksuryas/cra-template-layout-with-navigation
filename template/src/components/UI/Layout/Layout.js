import React, { Component } from 'react';
import classes from './Layout.module.css';
import ToolBarWrapper from './ToolBarWrapper/ToolBarWrapper';
import BottomBar from './BottomBar/BottomBar';

class Layout extends Component {
 render() {
  return (
    <div className={classes.Layout}>
        <ToolBarWrapper />

        <div className={classes.MainContent}>
        {this.props.children}
        </div>

        <BottomBar />
    </div>
     );
   }
};

export default Layout;