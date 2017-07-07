import React , {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';
import Toolbar  from '../Toolbar';
import RepoCard from '../repoCard';
export default class TeacherHomework extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2
       }),
       indicator:true,
    };
    this.mount = true;
  }
  componentDidMount(){
    const {actions,application}=this.props;
    actions.getAllHomework(application.username);
  }
  componentWillReceiveProps(props){
    const {repoList} = props;
    const {dataSource} = this.state;
    this.setState({
           dataSource: dataSource.cloneWithRows(repoList.homeworks.data),
           indicator:false
    })
  }
  renderRow = (exam)=>
  {
      let {navigator}=this.props;
      return(
                <RepoCard exam={exam} navigator={navigator} {...this.props}/>
      );
  }

  render(){
    const {application,drawer} = this.props;
    const {dataSource,indicator}=this.state;
    return (
      <View style={styles.container}>
      <View style={styles.nav}>
       <Toolbar style={styles.navBar} title={'Homework'} onIconPress={drawer.openDrawer} />
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
    backgroundColor:'rgb(238,238,238)'
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
