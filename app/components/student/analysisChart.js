import  React ,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ChartView from 'react-native-highcharts';
import { Divider, Button } from 'react-native-material-design';
export default class AnalysisChart extends Component{
  render(){
    let {testResult}=this.props;
    let result=[0,0];
    let res=[];
    for(let i=0;i<testResult.testcases.length;i++){
      if(testResult.testcases[i].passed)
      {
        result[0]++;
        res.push(<View style={styles.testcaseItem} key={i}>
                    <Icon name='check' size={15} color='#5CB85C' style={styles.questionIcon}/>
                    <Text style={styles.passText}>{testResult.testcases[i].name}</Text>
                    <Text style={styles.passText}>成功</Text>
                  </View>);
      }
      else
      {
        result[1]++;
        res.push(<View style={styles.testcaseItem} key={i}>
                    <Icon name='times' size={15} color='#D9534F' style={styles.questionIcon}/>
                    <Text style={styles.failText}>{testResult.testcases[i].name}</Text>
                    <Text style={styles.failText}>失败</Text>
                  </View>);
      }
    }
    var conf2={
    colors: ['#5CB85C', '#D9534F'],
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
         name: '通过测试个数',
         data: [
             ['通过', result[0]],
             ['未通过', result[1]],
         ]
     }]
    };
    return(
      <View>
        <ChartView style={{height:300}} config={conf2}></ChartView>
        <View>
          <View style={styles.runState}>
            <View style={styles.runText}>
            {testResult.compile_succeeded &&
              <Text style={styles.compiles}>编译成功</Text>
            }
            {!testResult.compile_succeeded &&
              <Text style={styles.runText}>编译失败</Text>}
            </View>
            <View style={styles.runText}>
            {testResult.tested &&
              <Text style={styles.tests}>测试用例运行成功</Text>
            }
            {!testResult.tested &&
              <Text style={styles.testf}>测试用例运行失败</Text>
            }
          </View>
          </View>
          <View style={styles.testCaseList}>
            {res}
          </View>
        </View>
        <Divider style={{ marginTop: 10 }} />
      </View>
    );
  }
}

const styles=StyleSheet.create({
runState:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  paddingTop: 5,
},
compiles:{
  alignSelf:'center',
    alignItems:'center',
  flex:1,
    color:'rgb(92,184,92)',
},
compilef:{
  alignSelf:'center',
  alignItems:'center',
  flex:1,
  color:'rgb(217,83,79)',
},
tests:{
  alignSelf:'center',
    alignItems:'center',
  flex:1,
    color:'rgb(92,184,92)',
},
testf:{
  alignSelf:'center',
  alignItems:'center',
  flex:1,
  color:'rgb(217,83,79)',
},
runText:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
},
testCaseList:{
  marginTop:10,
  alignItems:'center',
  justifyContent:'center',
},
passText:{
  paddingLeft:70,
  color:'rgb(92,184,92)',
},
failText:{
  paddingLeft:70,
  color:'rgb(217,83,79)',
},
testcaseItem:{
  flexDirection:'row',
  alignItems:'center',
},
});
