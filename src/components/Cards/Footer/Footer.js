import React from 'react';
import classes from './Footer.module.scss'

export default class Footer extends React.Component {
    render() {
        return (
            <div className = {classes.Footer}>
                <p>This email was sent to you as a registered member of prfctfit.com. To update your emails preferences <a href="#">click here</a>.</p>
                <p>Use of the service and website is subject to our <a href="#">Terms of Use</a> and <a href="#">Privacy Statement</a>.</p>
                <p className = {classes.lastPar}>© 2020 PRFCT FIT. All rights reserved</p>
            </div>
            
        )
    }
}