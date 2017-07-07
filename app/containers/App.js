'use strict'
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import appAction from '../actions/appAction';
import teacherAction from '../actions/teacherAction';
import Login from './login';

import {Navigator} from 'react-native-deprecated-custom-components'
import  NavigatorBar from '../components/NavigatorBar.js';

console.disableYellowBox = true;
export  class App extends Component {

  constructor(props){
    super(props);
    this.state={
      type:'student',
    }
  }
  renderScene =(route, navigator) =>{
      if (route.component) {
            const Component = route.component
            return <Component navigator={navigator} route={route} {...this.props} />
          }
 }

  render () {
    return (
          <Navigator
              initialRoute={{
                name: 'Login',
                component: Login
              }}
              navigationBar={<NavigatorBar/>}
              configureScene={() => ({
              ...Navigator.SceneConfigs.FloatFromRight
                    })}
              renderScene={this.renderScene.bind(this)}
            />
       );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(state=>{
  return{
  application: state.application,
  }
},dispatch=>{return {
  appActions:bindActionCreators(Object.assign({},{},appAction), dispatch),
} })(App);
