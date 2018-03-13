/**
 * Author: Junaid Azhar Shaikh
 * Date: 03/12/2018
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {
    MKButton,
    MKColor,
    MKIconToggle, 
    getTheme,
    MKTextField,
    MKRadioButton
} from 'react-native-material-kit';
import firebase from 'firebase';
export default class PostAd extends Component {
  constructor(){
    super();
    this.radioGroup = new MKRadioButton.Group();
  }
  
  state = {
    locationObject: "",
    sellerId: "",
    sellerName: "",
    sellerPhoto: "",
    sellerVerified: true,
    name: "",
    cuisine: "",
    photo: "",
    hosted: true,
    takeOut: true,
    glutenFree: true,
    halal: true,
    kosher: true,
    containsNuts: true,
    vegan: true,
    vegetarian: true,
    tags: ["rice", "beef", "mexican", "tofu"]
  };
  render() {
    const {scrollView,fieldStyles} = styles;
    return (
    <ScrollView contentContainerStyle={scrollView}>
      <View style={[{width: 300, marginTop: 5, padding: 5, borderRadius: 5, borderWidth:2}]}>
          <View style={[{padding:0}]}>
          <MKTextField
          text={'something'}
          onTextChange={name => this.setState({name})}
          textInputStyle={fieldStyles}
          placeholder={'Name'}
          tintColor={MKColor.Red}
          />
          <View style={{width: 350, marginTop: 10}}>
            <Text>Halal</Text>
            <MKRadioButton group={this.radioGroup} />
              <Text>Yes</Text>
            <MKRadioButton group={this.radioGroup} />
              <Text>No</Text>
          </View>
          <MKTextField
            text={'Something'}
            onTextChange={pNumber => this.setState({pNumber})}
            textInputStyle={fieldStyles}
            placeholder={'Phone number'}
            tintColor={MKColor.Red}
          />
          <MKTextField
            text={'Something'}
            onTextChange={address1 => this.setState({address1})}
            textInputStyle={fieldStyles}
            placeholder={'Address Line1'}
            tintColor={MKColor.Red}
          />
          <MKTextField
            text={'Something'}
            onTextChange={address2 => this.setState({address2})}
            textInputStyle={fieldStyles}
            placeholder={'Address Line2'}
            tintColor={MKColor.Red}
          />

          <MKTextField
            text={'Something'}
            onTextChange={city => this.setState({city})}
            textInputStyle={fieldStyles}
            placeholder={'City'}
            tintColor={MKColor.Red}
          />

          <MKTextField
            text={'Something'}
            onTextChange={state => this.setState({state})}
            textInputStyle={fieldStyles}
            placeholder={'State'}
            tintColor={MKColor.Red}
          />
          <MKTextField
            text={'Something'}
            onTextChange={zip => this.setState({zip})}
            textInputStyle={fieldStyles}
            placeholder={'Zip'}
            tintColor={MKColor.Red}
          />
          </View>
          <View style={styles.buttonsStyle}>
          <MKButton 
            backgroundColor={'red'}
            color={MKColor.White}
            borderRadius={20}
            onPress={this.onNextPress.bind(this)}
            style={{width:"50%", height: 40}}
            >
            <Text style={{fontSize: 18,textAlign: 'center',color:"white",padding: 5, fontFamily: 'Avenir', fontWeight:'bold'}}>
                Post
            </Text>
            </MKButton>
            {/* <NextButton /> */}
           
          </View>
          
      </View>
      </ScrollView>
    );
  }
  onNextPress(){
    const {currentUser} = firebase.auth();
    console.log(currentUser.uid);
    const { fName, lName, pNumber, address1, address2, city, state, zip } = this.state;
     return firebase.database().ref(`/users/${currentUser.uid}/`)
     .push({ fName, lName, pNumber, address1, address2, city, state, zip })
     .then(console.log('Successfully'))
     .catch(error=> console.log(error)); 
  }
  
  onSkipPress(){
  
  }
}

const styles = StyleSheet.create({
scrollView: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,0,.6)'
},
fieldStyles: {
  height: 40,
  color: "#000",
  padding: 2,
  marginTop:2
},
buttonsStyle:{
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 50

},
});
