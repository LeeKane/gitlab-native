import React ,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Toolbar  from '../Toolbar';
var Dimensions = require('Dimensions');
import Icon from 'react-native-vector-icons/FontAwesome';
import AnalysisChart from './analysisChart'
import Channel from '../../channel';
import { Divider, Button } from 'react-native-material-design';

export default class StudentAnalysis extends Component{
  constructor(props){
    super(props);
    this.state={
      questionResults:[],
    };
  }
  onBackPress=()=>{
    const{navigator}=this.props;
    navigator.pop();
  }
  componentDidMount(){
    const {actions,application}=this.props;
    const {exam} =this.props.route;
    let channel=new Channel();
    channel.getStudentAssignment(application.username,exam.id,application.id)
    .then(data=>{
      this.setState({
        questionResults:data.questionResults
      });
    });
  }

  render(){
    const {questionResults} =this.state;
    let res=[];
    if(questionResults){
    for(let i=0 ;i<questionResults.length ;i++){
      res.push(<View key={i}>
                    <View style={styles.dividerView}>
                      <View style={styles.dividerContent}>
                      <Icon name='code' size={15} color='#6B4BBE' style={styles.questionIcon}/>
                      <Text style={styles.dividerText}>{`NO.${questionResults[i].questionId}   ${questionResults[i].questionTitle}`}</Text>
                      </View>
                      <Divider style={{ marginTop: 10 }} />
                    </View>
                    <View style={styles.dividerView}>
                      <View style={styles.dividerContent}>
                        <View style={styles.basicDataBlock}>
                         <Text style={styles.basicDataNumber}>{questionResults[i].scoreResult.score}</Text>
                         <Text style={styles.basicDataMark}>得分</Text>
                       </View>
                        <View style={styles.basicDataBlock}>
                         <Text style={styles.basicDataNumber}>{questionResults[i].metricData.total_line_count}</Text>
                         <Text style={styles.basicDataMark}>总行数</Text>
                       </View>
                       <View style={styles.basicDataBlock}>
                        <Text style={styles.basicDataNumber}>{questionResults[i].metricData.field_count}</Text>
                        <Text style={styles.basicDataMark}>总域数</Text>
                      </View>
                      <View style={styles.basicDataBlock}>
                       <Text style={styles.basicDataNumber}>{questionResults[i].metricData.method_count}</Text>
                       <Text style={styles.basicDataMark}>方法数</Text>
                     </View>
                     <View style={styles.basicDataBlock}>
                      <Text style={styles.basicDataNumber}>{questionResults[i].metricData.max_coc}</Text>
                      <Text style={styles.basicDataMark}>max_coc</Text>
                      </View>
                    </View>
                      <Divider style={{ marginTop: 10 }} />
                    </View>
                    <AnalysisChart testResult={questionResults[i].testResult}/>
              </View>
              );
    }
    }
      return (
        <View style={styles.container}>
          <View style={styles.nav}>
            <TouchableOpacity onPress={this.onBackPress} underlayColor='transparent' style={{width: 80}}>
              <Icon name='chevron-left' size={20} color='#fff' style={styles.backNav} />
            </TouchableOpacity>
            </View>
          <ScrollView>
            {res}
          </ScrollView>
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
  dividerView:{
    paddingTop:5,
    paddingBottom:5,
    justifyContent:'center',
  },
  dividerText:{
    marginLeft:5,
  },
  dividerContent:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  questionIcon:{
    position:'absolute',
    left:5,
  },
basicDataBlock: {
  alignItems: 'center',
  flexDirection: 'column',
  width: 80
},
basicDataNumber: {
  color: '#909CAF',
  fontSize: 15,
  fontWeight: '500',
  marginRight: 3
},
basicDataMark: {
  color: '#909CAF',
  fontSize: 10,
  position: 'relative',
  bottom: 1
},
});
