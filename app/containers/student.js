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
import studentAction from '../actions/studentAction';
import StudentRepo from '../components/student/studentRepo';
export class Student extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {application,assignmentAnalysis,repoList,appActions,readme,studentActions}=this.props;
    return (
      <View style={styles.container}>
          <StudentRepo application={application} assignmentAnalysis={assignmentAnalysis} repoList={repoList} readme={readme} actions={studentActions}/>
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
  repoList: state.repoList,
  readme:state.readme,
  assignmentAnalysis:state.assignmentAnalysis
  }
},dispatch=>{return {
  appActions:bindActionCreators(Object.assign({},{},appAction), dispatch),
  studentActions:bindActionCreators(Object.assign({},{},studentAction),dispatch)
} })(Student);
