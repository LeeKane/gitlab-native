import React , {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import Toolbar  from './Toolbar';
var Dimensions = require('Dimensions');
import Icon from 'react-native-vector-icons/FontAwesome';
import QuestionItem from './questionItem';
export default class QuestionList extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
        dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2
        }),
        indicator:true,
        nowQuestions:[],
    };
    this.mount = true;
  }
  componentDidMount(){
    const {exam} =this.props.route;
    const {dataSource} = this.state;
    this.setState({
           dataSource: dataSource.cloneWithRows(exam.questions),
           indicator:false,
           nowQuestions:exam.questions
    })
  }
  renderRow = (ques) =>{
      const {exam} =this.props.route;
      return (
        <QuestionItem ques={ques} exam={exam} {...this.props}/>
      );
  }
  onBackPress=()=>{
    const{navigator}=this.props;
    navigator.pop();
  }
  render(){
      const {dataSource,indicator,nowQuestions} =this.state;
      const {exam} =this.props.route;
    return(
      <View style={styles.container}>
        <View style={styles.nav}>
          {exam.questions[0].type=='exam' &&
          <Image style={styles.backImage} source={require('../img/exam-back.jpg')}>
            <TouchableOpacity onPress={this.onBackPress} underlayColor='transparent' style={{width: 80}}>
              <Icon name='chevron-left' size={20} color='#fff' style={styles.backNav} />
            </TouchableOpacity>
          </Image>
          }
          {exam.questions[0].type=='exercise' &&
          <Image style={styles.backImage} source={require('../img/exercise-back.png')}>
            <TouchableOpacity onPress={this.onBackPress} underlayColor='transparent' style={{width: 80}}>
              <Icon name='chevron-left' size={20} color='#fff' style={styles.backNav} />
            </TouchableOpacity>
          </Image>
          }
          {exam.questions[0].type=='homework' &&
          <Image style={styles.backImage} source={require('../img/homework-back.png')}>
            <TouchableOpacity onPress={this.onBackPress} underlayColor='transparent' style={{width: 80}}>
              <Icon name='chevron-left' size={20} color='#fff' style={styles.backNav} />
            </TouchableOpacity>
          </Image>
          }
        </View>
        {nowQuestions.length === 0 &&
          <View style={styles.noStudents}>
          <Text style={styles.noStudentsText}>暂无问题信息</Text>

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
    height: 200,
    backgroundColor:'rgba(0,0,0,0)',
  },
  backNav: {
    height: 30,
    position: 'relative',
    top:10,
    width: 50
  },
  backImage:{
    flex:1,
    width:Dimensions.get('window').width,
    backgroundColor:'rgba(0,0,0,0)',

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
  quesPanel:{
    borderColor: '#eee',
    borderBottomWidth: 1,
    flexDirection:'row',
  },
  enterIcon: {
   height: 30,
   left: 15,
   marginLeft: -15,
   marginTop: -15,
   position: 'absolute',
   top: 22.5,
   width: 35
  },
  panelLeft: {
    flex:1,
    marginLeft:15,
   paddingLeft: 10,
   justifyContent: 'center'
  },
  panelRight:{
    flexDirection:'column',
    flex:7,
  },
  firstLine:{
    flex:2,
    flexDirection:'row',
    paddingBottom:10,
  },
  secondLine:{
    flex:2,
    paddingBottom:10,
  },
  thirdLine:{
    flex:1,
    flexDirection:'row',
  },
  panelName: {
   color: '#6B7C96',
   fontSize: 17,
   flex:4,
   marginTop:10,
  },
  difficulty:{
    justifyContent:'flex-start',
    flexDirection:'row',
    marginRight:15,
    marginTop:17,
    flex:1,
  },
  panelDes:{
    color: '#909CAF',
    fontSize: 13,
    flex:4,
  },
  panelHref:{
    flex:1,
    marginRight:15,
  },
  hrefText:{
    color:'rgb(107,75,190)',
    fontSize: 13,
  }
});
