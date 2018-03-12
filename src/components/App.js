/**
 * Author: Junaid Azhar Shaikh
 * Date: 03/12/2018
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createRootNavigator } from './../router';
import {initializeFirebaseConnection } from './../firebase/api';
import firebase from 'firebase';
import Loader from '../components/Loader';

export default class App extends Component {

  state = {
    loggedIn: null,
  }
componentWillMount(){
  initializeFirebaseConnection();
  this.verifyUser();
}

/**
 * Verifies if the user is already logged in
 */
verifyUser = () => {
  console.log(this.state.loggedIn);  
  firebase.auth().onAuthStateChanged((user) => {
  (user) ? this.setState({loggedIn :true}) : this.setState({loggedIn :false});
  console.log('stateChanged');
  console.log(this.state.loggedIn);
  });
}

renderView(){
  switch(this.state.loggedIn){
    case true, false:
      const Layout = createRootNavigator(this.state.loggedIn);
      return <Layout />;
    default:
      return <Loader size="large" />
  }
}
  render() {
    //return (this.renderView());
    const Layout = createRootNavigator(this.state.loggedIn);
      return <Layout />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
