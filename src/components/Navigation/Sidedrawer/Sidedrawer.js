import React from 'react';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css'
import Aux from '../../../hoc/psx'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {

    let sideDrawerClass = [classes.Sidedrawer, classes.Close]

    if(props.open){
        sideDrawerClass = [classes.Sidedrawer, classes.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={sideDrawerClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <NavigationItems/>
            </div>
        </Aux>
    );
}

export default sideDrawer;