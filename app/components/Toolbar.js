import React, { Component } from 'react';
import { Text, View , StyleSheet,Image } from 'react-native';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';

export default class Toolbar extends Component {
  constructor(props) {
     super(props);
     this.state = {
     };
 }
    render() {
        const { onIconPress,title } = this.props;
        const { navigator } = this.context;
        return (

            <MaterialToolbar
                 title={title ? title : 'Welcome'}
                 icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                 onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
                actions={[{
                    icon: 'search',
                }]}
                rightIconStyle={{
                    margin: 10
                }}
                style={styles.navbar}
            />
        );
    }
}

const styles= StyleSheet.create({
  navbar:{
    backgroundColor:'rgba(255,255,0,0)',
  },

});
