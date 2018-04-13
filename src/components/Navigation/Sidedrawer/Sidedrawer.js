import React from 'react';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css'

const sideDrawer = (props) => {
    return (
        <div className={classes.Sidedrawer}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <NavigationItems/>
        </div>
    );
}

export default sideDrawer;