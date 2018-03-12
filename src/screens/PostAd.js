/**
 * Author: Junaid Azhar Shaikh
 * Date: 03/12/2018
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class PostAd extends Component {
  render() {
    return(
        <View style={styles.container}>
            <Text> This is PostAd</Text>
        </View>
    ) ;
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
