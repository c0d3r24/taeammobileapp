
import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, Dimensions, TextInput} from 'react-native';
import { MKTextField,  MKColor, } from 'react-native-material-kit';
export default class ListView extends React.Component{
    state = { 
        searchTerm:''
    }
    render(){
      return (
        <View style={styles.container}> 
            <View style={{marginTop: 10}}>
            <TextInput 
            ref={(inputElement) => 
            {this.inputElement = inputElement;}}
            value={this.state.searchTerm}
            placeholder="Search your favorite food"
            onChangeText={this.handleChange}
            style={styles.input}
        />
          </View>
            <Button title="Show Details" 
            onPress={() => this.props.navigation.navigate('Details')}
            />
        </View>
      );
    }
    handleChange(){

    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      backgroundColor: 'rgba(255,255,0,0.6)',
    },
     input: {
            height: 60,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: 'rgba(255,0,0,.4)',
            padding: 5,
            width: "80%",
            marginHorizontal: "10%",
        },
      
  });