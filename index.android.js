import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Root from './app/root';

export default class Gitlab extends Component {
  render() {
    return (
        <Root/>
    );
  }
}



AppRegistry.registerComponent('gitlab', () => Gitlab);