import React,{Component} from 'react';
import
{
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
}from 'react-native';

export default class Tabbar extends Component
{
  constructor(props){
    super(props);
  }
  handlePress=(tabChange)=>
  {
    const {actions}=this.props;
    actions.changeTab(tabChange);
  };
  render(){
    const {tab} = this.props;
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {this.handlePress('Class');}} style={styles.item}>
          <View>
            <View style={styles.itemInner}>
            <Text style={styles.itemText}>学生</Text>
            </View>
            {tab === 'Class' &&
              <View style={styles.active} />
            }
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.handlePress('Repo');}} style={styles.item}>
          <View >
            <View style={styles.itemInner}>
            <Text style={styles.itemText}>项目</Text>
            </View>

          {tab === 'Repo' &&
            <View style={styles.active} />
          }

          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:
  {
    flexDirection:'row',
    height: 45,
    backgroundColor:'rgb(107,75,190)',
  },
  item:
  {
    flex:1,
    alignItems:'center',
  },
  active: {
    backgroundColor: '#fff',
    bottom: 0,
    height: 2,
    left: 0,
    position: 'absolute',
    right: 0
  },
  itemInner:
  {
      flex:2,
      justifyContent:'center',
  },
  itemText:
  {
    fontSize: 13,
    color: '#fff'
  },
});

AppRegistry.registerComponent('Tabbar',()=> Tabbar);
