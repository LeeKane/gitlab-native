import React , {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Reacme extends Component{
  onBackPress=()=>{
    const{navigator}=this.props;
    navigator.pop();
  }
  render(){
    const {readme} =this.props.route
    return(
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={this.onBackPress} underlayColor='transparent' style={{width: 80}}>
            <Icon name='chevron-left' size={20} color='#fff' style={styles.backNav} />
          </TouchableOpacity>
          </View>
        <Text>{readme.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  listView: {
    backgroundColor: '#fff',
    flex: 6,
    flexDirection: 'column',
    paddingTop: 10
  },
  nav: {
    height: 40,
    backgroundColor:'rgba(107,75,190,0.9)',
  },
  backNav: {
    height: 30,
    position: 'relative',
    top:10,
    width: 50
  },
});
