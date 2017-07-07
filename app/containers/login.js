import React,{Component} from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image
} from 'react-native';
import Student from './student';
import Teacher from './teacher';

var Dimensions = require('Dimensions');

export  default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      type:'',
      username:'',
      password:''
    }
  }
  onUsernameInput(text){
      this.setState({
        username:text
      });

  }
  onPasswordInput(text){
    this.setState({
      password:text
    });
  }
  login=()=>{
    const {username,password}=this.state;
    const {appActions}=this.props;
    appActions.login(username,password);
  };
  componentWillReceiveProps (props) {
    const {application} = props;
    const {navigator} = this.props;
    const {fail,type} = application
    if(this.state.type==='' && fail!==true && type === 'student'){
      if(navigator) {
        navigator.push({
            name: 'Student',
            component: Student,
        })
      }
    }
    if(this.state.type==='' && fail!==true && type === 'teacher'){
      if(navigator) {
        navigator.push({
            name: 'Teacher',
            component: Teacher,
        })
      }
    }
  }

  render(){
    const {application} = this.props;
    return(
      <Image style={styles.backImage} source={require('../../asserts/img/back.png')}>
        <View style={styles.inputView}>
          <TextInput
              style={styles.textInput}
              onChangeText={this.onUsernameInput.bind(this)}
              autoCapitalize={'none'}
              keyboardType={'default'}
              textAlignVertical={'center'}
              autoCorrect={false}
              placeholder={'username'}
              value={this.state.username}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize={'none'}
              onChangeText={this.onPasswordInput.bind(this)}
              keyboardType={'default'}
              textAlignVertical={'center'}
              autoCorrect={false}
              placeholder={'password'}
              secureTextEntry={true}
              value={this.state.password}
            />
            <TouchableOpacity style={styles.loginButton} onPress={this.login}>
              <Text style={styles.loginText}>登陆</Text>
            </TouchableOpacity>
            <View style={styles.failView}>
            {application.fail === true &&
                <Text style={styles.failText}>用户名或密码错误</Text>
            }
            </View>
        </View>
      </Image>
    );
  }
}

const styles=StyleSheet.create({
backImage:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  width:Dimensions.get('window').width,
  backgroundColor:'rgba(0,0,0,0)',

},
inputView:{
  marginTop:180,
  flex:1,
  alignItems:'center',
  justifyContent:'center',
},
textInput: {
    backgroundColor:'rgb(244,244,247)',
    marginBottom:20,
    borderRadius: 5,
    color: 'rgba(107,75,190,0.9)',
    fontSize: 14,
    height: 40,
    width: 240,
    alignItems:'center',
    justifyContent:'center',
  },
  loginButton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(107,75,190,0.9)',
    marginTop:20,
    marginBottom:20,
    borderRadius: 5,
    width: 240,
    height: 40,
  },
  loginText:{
    color:'rgb(244,244,247)',
  },
  failView:{
    alignItems:'center',
    justifyContent:'center',
    width: 240,
    height: 40,
  },
  failText:{
    color:'rgba(107,75,190,0.9)',
  },
});
