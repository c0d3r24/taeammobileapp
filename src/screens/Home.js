/**
 * Author: Junaid Azhar Shaikh
 * Date: 03/12/2018
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import DetailView from './DetailView';
import ListView  from './ListView';

import {StackNavigator} from 'react-navigation';
export default Home  = StackNavigator({
  List: {
    screen: ListView
  },
  Details: {
    screen: DetailView
  }
}); 





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
