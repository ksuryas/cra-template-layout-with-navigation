import React from 'react';
import classes from './ContactBar.module.css';
import ContactUs from '../../../ContactUs/ContactUs';

const ContactBar = () => {
    return (
        <div className={classes.DesktopContactBar}>
            <p></p>
            <div>
                <p className={[classes.WebsiteName, classes.AlignBothWays].join(' ')}>Put your Company Name Here</p> 
                <p className={classes.AlignBothWays}>Website Tagline</p>
            </div>                     
            <ContactUs addressShown={false} className={[classes.DesktopSubGrid, classes.AlignVertical,classes.MobileOnly].join(' ')} emailTelClassName={classes.EmailTel} />
        </div>
    );
};

export default ContactBar;