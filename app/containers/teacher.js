'use strict'
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import appAction from '../actions/appAction';
import teacherAction from '../actions/teacherAction';

import TeacherClass from '../components/teacher/teacherClass';

export   class Teacher extends Component{
  constructor (props) {
    super(props)
    this.state={
      tab:"Class"
    }
  }
  componentWillReceiveProps (props) {
    const {teacherApp} = props
    this.setState({
      tab: teacherApp.tab
    })
  }
  render(){
    let {tab} = this.state;
    const {application,teacherApp,classList,studentList,repoList,assignments,teacherActions}=this.props;
    return (
      <View style={styles.container}>
          <TeacherClass application={application} assignments={assignments} teacherApp={teacherApp}  classList={classList} studentList={studentList} repoList={repoList} actions={teacherActions}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(state=>{
  return{
  application: state.application,
  classList:state.classList,
  teacherApp: state.teacherApp,
  studentList: state.studentList,
  repoList: state.repoList,
  assignments:state.assignments,
  }
},dispatch=>{return {
  appActions:bindActionCreators(Object.assign({},{},appAction), dispatch),
  teacherActions:bindActionCreators(Object.assign({},{},teacherAction), dispatch),
} })(Teacher);
