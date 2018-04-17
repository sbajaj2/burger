/**
 * Created by sbajaj on 4/17/2018.
 */
import React from 'react';
import classes from './DrawerToggle.css'

const drawertoggle = (props) => (
    <div className={classes.DrawerToggle}  onClick={props.open}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawertoggle;