import React, { Component } from 'react';
import Aux from '../../hoc/psx';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';


class Layout extends Component {

    state = {
        sideDrawerShow: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({sideDrawerShow: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState({sideDrawerShow: true})
    }

    render () {
        return (
            <Aux>
                <Toolbar sideDrawerOpen={this.sideDrawerOpenHandler}/>
                <SideDrawer open={this.state.sideDrawerShow} closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;