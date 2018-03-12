/**
 * Author: Junaid Azhar Shaikh
 * Date: 03/12/2018
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import {loginUserWithEmailAndPassword} from  './../firebase/api'
import Loader from '../components/Loader';
export default class Login extends Component {
state = {
  email: '',
  password: '',
  loading: false,
  error: '',
}

onButtonPress(){
  const { email , password } = this.state;
  this.setState({ error: '', loading: true });
  (loginUserWithEmailAndPassword(email, password))
  ? this.onAuthSuccess.bind(this)
  : this.onAuthFailed.bind(this);
}

onAuthSuccess(){
  this.setState({
      email : '',
      password: '',
      error: '',
      loading: false,
  });
}
onAuthFailed(){
  this.setState({
      error: 'Authentication Failed',
      loading: false,
  });
}
renderLoader() {
  return (this.state.loading)
      ?  <Loader size="large" />
      : <MKButton 
      backgroundColor={'red'}
    
      onPress={this.onButtonPress.bind(this)}
      color={MKColor.White}
      borderRadius={20}
      >
          <Text style={{fontSize: 18,textAlign: 'center',color:"white",padding: 5, fontFamily: 'Avenir', fontWeight:'bold'}}>
              Login
          </Text>
      </MKButton>
}

  render() {
    const { form, fieldStyles, container, loginButtonArea, errorMessage } = styles;

    return(
      <View style={styles.container}>
        <Image 
          style={{width: 80, height: 80}}
          source={require('./../assets/images/temp_logo.png')} />
        <Text style={styles.brand}>
          Welcome to Taeam
        </Text>
  
      <View style={form}>
        <Text style={{fontFamily: 'Avenir', fontWeight: 'bold'}}>
          Login or create an account 
        </Text>
      <MKTextField
        text={this.state.email}
        onTextChange={email => this.setState({email})}
        textInputStyle={fieldStyles}
        placeholder={'Email'}
        tintColor={MKColor.Red}
      />
      <MKTextField 
        text={this.state.password}
        onTextChange={password => this.setState({password})}
        textInputStyle={fieldStyles}
        placeholder={'Password'}
        tintColor={MKColor.Red}
        password={true}
      />
      <Text style={errorMessage}>
        {this.state.error}
      </Text>
      <View style={loginButtonArea}>
        {this.renderLoader()}
      </View>       
    </View>
  </View>);
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 50,
    paddingBottom: 10,
    width: 300
},
fieldStyles: {
    height: 40,
    color: "#0c0c0c",
    paddingLeft: 2,
},
loginButtonArea: {
    marginTop: 20
},
errorMessage:{
    color: 'red',
    marginTop: 15,
    fontSize: 15,
    alignSelf: 'center'
},
brand: {
  fontSize: 20,
  textAlign: 'center',
  margin: 5,
  fontFamily: 'Chalkduster',
  fontSize: 30,
  fontWeight: 'bold',
},
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,0,1.0)' //'#F5FCFF', 
},
});
