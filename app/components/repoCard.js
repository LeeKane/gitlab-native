import React , {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { Card, Button, COLOR, TYPO } from 'react-native-material-design';
import Steps from 'antd-mobile/lib/steps';
import QuestionList from './questionList';
import TeacherAnalysis from './teacher/teacherAnalysis';
import AnalysisQuestion from './teacher/analysisQuestion';
import StudentAnalysis from './student/studentAnalysis';
export default class RepoCard extends Component{
  constructor(props){
    super(props);
    this.theme="paperBlue";
    const Step = Steps.Step;
    this.steps = [{
    title: '初始化',
    description: '项目正在初始化',
    }, {
    title: '进行中',
    description: '项目进行中，请注意结束时间',
    }, {
    title: '分析中',
    description: '项目分析中，请耐心等待分析结果',
    }
    , {
    title: '结束',
    description: '项目分析完成，可查看分析结果',
    }].map((s, i) => <Step key={i} title={s.title} description={s.description} />);
  }
  openQuestions= ()=>{
    let {exam,navigator} = this.props;
    if(navigator) {
      navigator.push({
          name: 'QuestionList',
          component: QuestionList,
          exam
      })
    }
  }
  openAnalysis = ()=>{
    let {application,exam,navigator} = this.props;
    if(navigator && application.type=='teacher') {
      navigator.push({
          name: 'AnalysisQuestion',
          component: AnalysisQuestion,
          exam
      })
    }
    if(navigator && application.type=='student') {
      navigator.push({
          name: 'StudentAnalysis',
          component: StudentAnalysis,
          exam
      })
    }
  }
  render(){
    let {exam} = this.props;
    let current=0;
    if(exam.status== 'ongoing'){current=1;}
    if(exam.status== 'timeup' || exam.status== 'analyzing'){current=2;}
    if(exam.status== 'analyzingFinish'){current=3;}

    return (
            <Card>
                {exam.questions[0].type=='exam' &&
                  <Card.Media
                    height= {140}
                    image={<Image source={require('../img/exam.jpg')} />}
                    overlay
                    >
                  <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>{exam.title}</Text>
                  </Card.Media>
                }
                {exam.questions[0].type=='exercise' &&
                  <Card.Media
                    height= {140}
                    image={<Image source={require('../img/execrise.png')} />}
                    overlay
                    >
                  <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>{exam.title}</Text>
                </Card.Media>
                }
                {exam.questions[0].type=='homework' &&
                  <Card.Media
                    height= {140}
                    image={<Image source={require('../img/homework.png')} />}
                    overlay
                    >
                  <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>{exam.title}</Text>
                  </Card.Media>
                }
                <Card.Body>
                 <Steps current={current} direction="horizontal" size="small">{this.steps}</Steps>
                   <Text>{exam.startAt} 至 {exam.endAt}</Text>
                </Card.Body>
                <Card.Actions position="right">
                    <View style={styles.cardAction}>
                    <Button  style={styles.action} text="查看题目" onPress={this.openQuestions}/>
                    <Button  style={styles.action} text="查看分析" onPress={this.openAnalysis} />
                    </View>
                </Card.Actions>
            </Card>

  );
  }
}

const styles = StyleSheet.create({
  cardAction:{
    flexDirection:'row',
  },
  action:{
    flex:1,
    color:'rgba(107,75,190,0.9)',
    paddingLeft:20,
  }
});
