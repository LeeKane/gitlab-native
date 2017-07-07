'use strict'
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';
import Toolbar  from '../Toolbar';
import { Card, Button, COLOR, TYPO, Divider } from 'react-native-material-design';
import ExamList from './examList';
import RepoCard from '../repoCard';
export default class RepoList extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      dataSource1: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2
       }),
       indicator:true,
    };
    this.mount = true;
    this.tab='';
  }
  componentDidMount(){
    const {actions,application}=this.props;
    actions.getExam(application.username);
    actions.getHomework(application.username);
    actions.getExercise(application.username);
  }
  componentWillReceiveProps(props){
    const {repoList} = props;
    let {dataSource1} =this.state;
    let source=[];
    source=[...repoList.exams.data,...repoList.exercises.data,...repoList.homeworks.data];
    this.setState({
           dataSource1: dataSource1.cloneWithRows(source),
           indicator:false
    })
  }
  renderRow = (exam)=>
  {
        let {navigator}=this.props;
         let changeTab= (this.tab !== exam.questions[0].type);
         this.tab  = exam.questions[0].type;
         return (
                <View>
                  {changeTab && this.tab == 'exam' &&
                    <View style={styles.dividerView}>
                    <Text style={styles.dividerText}>考试</Text>
                        <Divider style={{ marginTop: 8 }} />
                    </View>

                  }
                  {changeTab && this.tab == 'exercise' &&
                    <View style={styles.dividerView}>
                        <Divider style={{ marginBottom: 8 }} />
                    <Text style={styles.dividerText}>练习</Text>
                      <Divider style={{ marginTop: 8 }} />
                    </View>

                  }
                  {changeTab && this.tab == 'homework' &&
                    <View style={styles.dividerView}>
                        <Divider style={{ marginBottom: 8 }} />
                    <Text style={styles.dividerText}>作业</Text>
                      <Divider style={{ marginTop: 8 }} />
                    </View>

                  }
                      <RepoCard exam={exam} navigator={navigator} {...this.props}/>
                </View>

      );
  }

  render(){
    const {application,drawer} = this.props;
    const {dataSource1,indicator}=this.state;
    return (
      <View style={styles.container}>
      <View style={styles.nav}>
      <Toolbar style={styles.navBar} title={'Student'} onIconPress={drawer.openDrawer} />
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
        dataSource={dataSource1}
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
  dividerView:{
    paddingTop:5,
    paddingBottom:5,
    justifyContent:'center',
  },
  dividerText:{
    marginLeft:25,
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
