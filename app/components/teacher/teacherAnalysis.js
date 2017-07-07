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
  Linking,
  ScrollView,
} from 'react-native';
import Toolbar  from '../Toolbar';
var Dimensions = require('Dimensions');
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider, Button } from 'react-native-material-design';
import ChartView from 'react-native-highcharts';

export default class TeacherAnalysis extends Component{
  constructor(props){
    super(props)
    this.state={
      searchId: null,
      scores:[],
      searchResult:null,
      searched:false,
    };
    this.scoreList=[0,0,0,0,0,0,0,0,0,0];
    this.average=0;
    this.max=0;
    this.min=0;
  }
  onBackPress=()=>{
    const{navigator}=this.props;
    navigator.pop();
  }
  componentDidMount(){
    const {scores} =this.props.route;
    let sum=0;
    for(let i=0;i<scores.length;i++){
      let flag=scores[i].score/10;
      if(flag==10)
      flag--;
      this.scoreList[flag]++;
      sum+=scores[i].score;
      if(scores[i].score>this.max)
      this.max=scores[i].score;
      if(scores[i].score<this.min)
      this.min=scores[i].score;
    }
    this.average=sum/scores.length;
    this.average = this.average .toFixed(2);
    this.setState({
      scores:scores
    });
  }

  search = ()=>{
    let {searchId,scores} = this.state;
    let result=null;
    for(let i=0;i<scores.length;i++){
      if(searchId === scores[i].studentNumber)
      {
        result=scores[i];
        break;
      }
    }
    this.setState({
      searchResult:result,
      searched:true,
    });
  };
  onIdInput(text){
      this.setState({
        searchId:text
      });

  }
  render(){
        const {searchResult,searched,scores}=this.state;
        const {type} =this.props.route;
        var Highcharts='Highcharts';
        var conf={
          chart:{
            backgroundColor: 'rgb(250, 250, 250)',
          },
        title: {
            text: '分数分布'
        },

        subtitle: {
            text: `平均分： ${this.average}  最高分： ${this.max}  最低分： ${this.min}`
        },

        xAxis: {
            categories: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },
        yAxis: {
                title: {
                    text: '人数'
                },
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            data: this.scoreList,
            showInLegend: false
        }]
      };
      var conf2={
        chart: {
          backgroundColor: 'rgb(250, 250, 250)',
       type: 'pie',
       options3d: {
           enabled: true,
           alpha: 45
       }
       },
       title: {
           text: '测试用例通过情况'
       },
       plotOptions: {
           pie: {
               innerSize: 100,
               depth: 45
           }
       },
       series: [{
           name: '人数',
           data: [
               ['全部通过', this.scoreList[9]],
               ['全部未通过', this.scoreList[0]],
           ]
       }]
      };


      return(
        <View style={styles.container}>
          <ScrollView>
          <View style={styles.nav}>
            {type=='exam' &&
            <Image style={styles.backImage} source={require('../../img/exam-back.jpg')}>
              <TouchableOpacity onPress={this.onBackPress} underlayColor='transparent' style={{width: 80}}>
                <Icon name='chevron-left' size={20} color='#fff' style={styles.backNav} />
              </TouchableOpacity>
            </Image>
            }
            {type=='exercise' &&
            <Image style={styles.backImage} source={require('../../img/exercise-back.png')}>
              <TouchableOpacity onPress={this.onBackPress} underlayColor='transparent' style={{width: 80}}>
                <Icon name='chevron-left' size={20} color='#fff' style={styles.backNav} />
              </TouchableOpacity>
            </Image>
            }
            {type=='homework' &&
            <Image style={styles.backImage} source={require('../../img/homework-back.png')}>
              <TouchableOpacity onPress={this.onBackPress} underlayColor='transparent' style={{width: 80}}>
                <Icon name='chevron-left' size={20} color='#fff' style={styles.backNav} />
              </TouchableOpacity>
            </Image>
            }
          </View>
          <ChartView style={{height:300}} config={conf}></ChartView>
          <ChartView style={{height:300}} config={conf2}></ChartView>
          <View style={styles.dividerView}>
              <Divider style={{ marginBottom: 8 }} />
              <Text style={styles.dividerText}>查看单个学生分析</Text>
          </View>
          <View style={styles.searchView}>
              <Icon name='search' size={20} color='#6B7C96' style={styles.searchIcon} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.onIdInput.bind(this)}
                    autoCapitalize={'none'}
                    keyboardType={'default'}
                    textAlignVertical={'center'}
                    autoCorrect={false}
                    placeholder={'学号'}
                    value={this.state.searchId}
                  />
                  <Button  style={styles.action} onPress={this.search} text="查找"/>
          </View>
          {searchResult &&
            <Text style={styles.searchText}>{` 姓名：${searchResult.studentName}                   成绩： ${searchResult.score}`}</Text>
          }
          {!searchResult && searched &&
            <Text style={styles.searchText}>未找到对应学生</Text>
          }
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
  dividerView:{
    paddingTop:5,
    paddingBottom:5,
    justifyContent:'center',
  },
  dividerText:{
    marginLeft:15,
  },
  searchView:{
    flexDirection:'row',
  },
  searchIcon:{
    marginTop:15,
    marginLeft:15,
    flex:1,
  },
  textInput:{
    flex:6,
  },
  action:{
    marginTop:10,
    flex:2,
  },
  searchText:{
    alignItems:'center',
    alignSelf:'center'
  }
});
