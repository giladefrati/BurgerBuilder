import React, {Component} from 'react';
import Aux from '../ReactAux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerToggleHandler = () => {
        this.setState(( prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer} 
        });
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }
    render(){
        return(
            <Aux>    
                <Toolbar clicked={this.sideDrawerToggleHandler}/>
                <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content} >
                    {this.props.children}
                </main>
            </Aux>
        )        
        }
}
export default Layout;