import React, { useState } from 'react';
import classes from './ContactBar.module.css';
import ContactUs from '../../../ContactUs/ContactUs';
import websiteDetailsConfig from '../../../../../../helpers/websiteDetailsConfig';

const ContactBar = () => {
    let [theme, setTheme] = useState("Default");

    const switchTheme = () => {
        if(theme === "DarkMode") {
            setTheme("Default");
            
            document.body.className = "CommonStyles DefaultTheme";
        } else {
            setTheme("DarkMode");

            document.body.className = "CommonStyles DarkModeTheme";
        }
    }; 

    return (
        <div className={classes.DesktopContactBar}>
            <p></p>
            <div>
             <p className={[classes.WebsiteName, classes.AlignBothWays].join(' ')}>{websiteDetailsConfig.name}</p> 
                <p className={classes.AlignBothWays}>{websiteDetailsConfig.tagline}</p>
            </div>                     
            
            <ContactUs addressShown={false} className={[classes.DesktopSubGrid, classes.AlignVertical, classes.MobileOnly].join(' ')} emailTelClassName={classes.EmailTel} /> 

            <i className={[classes.DarkModeIcon, "fa fa-sun-o fa-lg"].join(' ')} onClick={switchTheme} />
        </div>
    );
};

export default ContactBar;