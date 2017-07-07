'use strict'
import React,{Component} from 'react';
import
{
  AppRegistry,
  View,
  Text,
  DrawerLayoutAndroid,
}from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import ClassList from './classList';
import  NavigatorBar from '../NavigatorBar.js';
import Toolbar  from '../Toolbar';
import Navigation from '../navigation';
import Navigate from '../../utils/Navigate';
export default class TeacherClass extends Component
{
    constructor(props) {
      super(props);
      this.state = {
        drawer: null,
        nav: null
      };
    }

    setDrawer = (drawer) => {
      this.setState({
          drawer:drawer
      });
    };
    setNavigator = (navigator) => {
      this.setState({
          nav:navigator
      });
    };
    renderScene =(route, navigator) =>{
    if (route.component) {
      let {drawer} = this.state;
      const Component = route.component;
      return <Component navigator={navigator} route={route} drawer={drawer} {...this.props} />
    }
    }
  render()
  {
    const {application} = this.props;
    let {drawer,nav} = this.state;
    const navView = React.createElement(Navigation,{application:application,nav:nav,drawer:drawer});
      return (
        <DrawerLayoutAndroid
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => {
                    if (drawer && nav) {
                        return navView;
                    }
                    return null;
                }}
				ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
			>
        {drawer &&
  				<Navigator
  					initialRoute={Navigate.getInitialRoute()}
  					navigationBar={<NavigatorBar/>}
  					configureScene={() => {
                              return Navigator.SceneConfigs.FadeAndroid;
                          }}
            ref={(navigator) => { !this.state.nav ? this.setNavigator(navigator) : null }}
  					renderScene={this.renderScene.bind(this)}
  				/>}
        </DrawerLayoutAndroid>

    );
  }
}
