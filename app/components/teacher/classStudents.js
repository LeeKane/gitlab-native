import React , {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ClassStudents extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
        dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2
        }),
        indicator:true,
        nowStudents:[],
    };
    this.mount = true;
  }
  componentDidMount(){
    const {aclass} =this.props.route;
    const {actions,application}=this.props;
    actions.getClassStudents(application.username,aclass.id);
  }
  componentWillReceiveProps(props){
    const {studentList} = props;
    const {aclass} =this.props.route;
    const {dataSource} = this.state;
    this.setState({
           dataSource: dataSource.cloneWithRows(studentList[aclass.id]),
           indicator:false,
           nowStudents:studentList[aclass.id]
    })
  }
  onBackPress=()=>{
    const{navigator}=this.props;
    navigator.pop();
  }
  renderRow = (student)=>
  {
      return (
        <View style={styles.panel}>
          <View style={styles.panelLeft}>
            {student.gender === 'female' &&
            <Icon name='venus' size={20} color='#6B7C96' style={styles.enterIcon} />}
            {student.gender === 'male' &&
            <Icon name='mars' size={20} color='#6B7C96' style={styles.enterIcon} />}
          </View>
          <View style={styles.panelNameContainer}>
          <Text style={styles.panelName}>{student.name}</Text>
          <View style={styles.panelId}>
          <Text style={styles.panelTeam}>学号: {student.username}</Text>
          <Text style={styles.panelTeam}>gitId: {student.gitId}</Text>
          </View>
          </View>
        </View>
      );
  }
  render(){
    const {dataSource,indicator,nowStudents}=this.state;
    const{navigator}=this.props;
    return (
      <View style={styles.container}>
      <View style={styles.nav}>
          <TouchableOpacity onPress={this.onBackPress} underlayColor='transparent' style={{width: 80}}>
            <Icon name='chevron-left' size={20} color='#fff' style={styles.backNav} />
          </TouchableOpacity>
      </View>
      {nowStudents.length === 0 &&
        <View style={styles.noStudents}>
        <Text style={styles.noStudentsText}>暂无学生资料</Text>
        </View>
      }
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

const styles=StyleSheet.create({
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
    height: 50,
    paddingTop: 5,
    paddingLeft: 5,
    backgroundColor:'rgba(107,75,190,0.9)',
  },
  backNav: {
    height: 30,
    position: 'relative',
    top:10,
    width: 50
  },
  noStudents:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  noStudentsText:{
    justifyContent:'center',
    alignItems:'center',
    color: '#909CAF',
    flex:1,
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
 flexDirection:'column',
 flex:9,
},
panelName: {
 color: '#6B7C96',
 fontSize: 17,
 flex:2,
 marginTop:10,
},
panelId:{
  flex:2,
  alignItems:"center",
  flexDirection:'row',
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
});
