import React , {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import Tabbar from '../Tabbar';
import ClassStudents from './classStudents';
import Toolbar  from '../Toolbar';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ClassList extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2
       }),
       indicator:true,
       text:''
    };
    this.mount = true;
  }
  componentDidMount(){
    const {actions,application}=this.props;
    actions.getAllClass(application.username);
  }
  componentWillReceiveProps(props){
    const {classList} = props;
    const {dataSource} = this.state;
    this.setState({
           dataSource: dataSource.cloneWithRows(classList.data),
           indicator:false
    })
  }
  onInput(){

  }
  onClassSelected = (aclass)=>{
      const {navigator} = this.props;
      if(navigator) {
        navigator.push({
            name: 'ClassStudents',
            component: ClassStudents,
            aclass,
        })
      }
  }
  renderRow = (aclass)=>
  {
      return (
        <TouchableOpacity onPress={()=>this.onClassSelected(aclass)} underlayColor='transparent'>
         <View style={styles.panel}>
           <View style={styles.panelLeft}>
             <Icon name='graduation-cap' size={20} color='#6B7C96' style={styles.enterIcon} />
           </View>
           <View style={styles.panelNameContainer}>
           <Text style={styles.panelName}>{aclass.name}</Text>
           <Text style={styles.panelTeam}>id: {aclass.id}</Text>
           </View>
           <View style={styles.panelRight}>
             <Icon name='chevron-right' size={16} color='#6B4BBE' style={styles.enterIcon} />
           </View>
         </View>
       </TouchableOpacity>
      );
  }

  render(){
    const {application,drawer} = this.props;
    const {dataSource,indicator,text}=this.state;
    return(
      <View style={styles.container}>
      <View style={styles.nav}>
       <Toolbar style={styles.navBar} title={'Teacher'} onIconPress={drawer.openDrawer} />
      </View>
       {indicator &&
         <View style={styles.indicatorView}>
         <ActivityIndicator
           animating
           color='#c2c2c2'
           style={styles.indicator}
           size='large'
         />
       </View>}
        {!indicator && <ListView
         dataSource={dataSource}
         renderRow={this.renderRow}
         enableEmptySections={true}
         style={styles.listView}
        />}
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor:'rgba(107,75,190,0.9)',
    height: 100,
    flexDirection: 'column',
    position: 'relative',
    paddingLeft: 15,
    justifyContent:'center',
    alignItems:'center'
  },
  nav: {
    height: 50,
    paddingTop: 5,
    paddingLeft: 5,
    backgroundColor:'rgba(107,75,190,0.9)',
  },
  headerInner: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  panel: {
 borderColor: '#eee',
 borderBottomWidth: 1,
 height: 65,
 flexDirection: 'row'
},
panelLeft: {
  flex:1,
  marginLeft:15,
 paddingLeft: 10,
 justifyContent: 'center'
},
panelNameContainer:
{
 flexDirection:'row',
 flex:9,
 alignItems:"center",
},
panelName: {
 color: '#6B7C96',
 fontSize: 17,
 flex:1,
},
panelTeam: {
 color: '#909CAF',
 fontSize: 13,
 flex:1,
},
panelRight: {
 height: 65,
 position: 'relative',
 width: 30
},
classIcon:{
  height: 80,
  width: 80,
  right: 15,
  marginLeft:15,
  paddingLeft:15,
  marginTop: -15,
  position: 'absolute',
  top: 32.5,
},
enterIcon: {
 height: 30,
 left: 15,
 marginLeft: -15,
 marginTop: -15,
 position: 'absolute',
 top: 32.5,
 width: 30
},
  textInput: {
    backgroundColor: '#BD4C29',
    borderRadius: 5,
    color: '#fff',
    fontSize: 14,
    height: 40,
    paddingHorizontal: 5,
    width: 260
  },
  searchIconView: {
    backgroundColor: '#BD4C29',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: 40,
    left: -5,
    position: 'relative',
    width: 40
  },
  searchIcon: {
    width: 16,
    height: 16,
    left: 20,
    marginLeft: -8,
    marginTop: -8,
    position: 'absolute',
    top: 20
  },
  listView: {
    backgroundColor: '#fff',
    flex: 6,
    flexDirection: 'column',
    paddingTop: 10
  },
  indicatorView: {
     flex: 13,
     flexDirection: 'column'
   },
   indicator: {
     alignSelf: 'center',
     height: 36,
     justifyContent: 'center',
     position: 'relative',
     top: 100
   },
});
