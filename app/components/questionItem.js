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
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import address from '../channel/address';
import Base64 from '../utils/Base64';
import Readme from './student/readme';
export default class QuestionItem extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      readme:{},
    }
  }
  openReadme = ()=>{
    const {readme}=this.state;
    let {navigator} = this.props;
    if(navigator) {
      navigator.push({
          name: 'Readme',
          component: Readme,
          readme
      })
    }
  }
  componentWillMount(){
    const{actions,application,ques,exam} =this.props;
    //TODO:assignmentId,studentId,questionId
    let url = address.readme(98,227,26);
    let result='sss';
    var str = `${application.username}:123`;
    var base = new Base64();
    var token = base.encode(str);
    return window.fetch(url,{
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        "Authorization":`Basic ${token}`
      }})
      .then(res => res.json(),err=> console.error(err))
      .then(data =>{
        this.setState(
          {
            readme:data,
          }
        );
      });
  }
  render()
  {
    const{ques,application}=this.props;
    const {readme}=this.state;
    let {difficulty} = ques;
    difficultyStars=[];
    for(let i=0;i<difficulty;i++){
      difficultyStars.push(<Icon key={i} name='star' size={10} color='#6B4BBE'/>);
    }
      return (
        <View style={styles.quesPanel}>
          <View style={styles.panelLeft}>
            <Icon name='code' size={30} color='#6B7C96' style={styles.enterIcon} />
          </View>
          <View style={styles.panelRight}>
            <View style={styles.firstLine}>
              <Text style={styles.panelName}>{`NO.${ques.id} ${ques.title}`}</Text>
              <View style={styles.difficulty}>
                {difficultyStars}
              </View>
            </View>
            <View style={styles.secondLine}>
              <Text style={styles.panelDes}>{`问题描述： ${ques.description}`}</Text>
            </View>
            <View style={styles.thirdLine}>
              <Text style={styles.panelDes}>{`创建者： ${ques.creator.name}`}</Text>
              <TouchableOpacity style={styles.panelHref} onPress={() => Linking.openURL(`${ques.gitUrl}`)}>
                <Text style={styles.hrefText}>Gitlab查看</Text>
              </TouchableOpacity>
            </View>
            {readme.content && application.type=='student' &&
              <View style={styles.thirdLine}>
                <TouchableOpacity style={styles.panelReadme} onPress={this.openReadme}>
                  <Text style={styles.hrefText}>查看readme</Text>
                </TouchableOpacity>
              </View>
            }
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
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
  panelReadme:{
    flex:1,
  },
  hrefText:{
    color:'rgb(107,75,190)',
    fontSize: 13,
  }
});
