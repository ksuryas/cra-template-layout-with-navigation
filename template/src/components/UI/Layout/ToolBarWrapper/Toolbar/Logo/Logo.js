import React from 'react';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
       <a href="/">
        <img 
        src="/images/logo192.png" 
        alt="Logo" />
       </a> 
    </div>
);

export default logo;