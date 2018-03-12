import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Signup from './../screens/Signup';
import Login from './../screens/Login';
import Home from './../screens/Home';
import Profile from './../screens/Profile';
import Settings from './../screens/Settings';
import Chat from './../screens/Chat';
import PostAd from './../screens/PostAd';


const headerStyle = {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
};
export const HomeScreen = StackNavigator ({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login",
            headerStyle
        }
    },
    Singup :{
        screen: Signup,
        navigationOptions: {
            title: "Sign Up",
            headerStyle
        }
    }
   
});

export const ClientArea = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({tintColor}) =>
                <Icon name={'home'} size={30} color={"red"} />
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({tintColor}) =>
                <Icon name={'user'} size={30} color={"red"} />
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarLabel: "Settings",
                tabBarIcon: ({tintColor}) =>
                <Icon name={'cog'} size={30} color={"red"} />
            }
        },
        Chat: {
            screen: Chat,
            navigationOptions: {
                tabBarLabel: "Chat",
                tabBarIcon: ({tintColor}) =>
                <Icon name={'comments'} size={30} color={"red"} />
            }
        },
        PostAd: {
            screen: PostAd,
            navigationOptions: {
                tabBarLabel: "Add Ad",
                tabBarIcon: ({tintColor}) =>
                <Icon name={'spoon'} size={30} color={"red"} />
            }
        },
    },
    {
    tabBarOptions: {
            style: {
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                backgroundColor: '#F5FCFF'
                }
        }
    },
    
);

export const createRootNavigator = (loggedIn = false) => {
    return StackNavigator(
        {
            HomeScreen: {
                screen: HomeScreen,
                navigationOptions:{
                    gesturesEnabled: false
                }
            },
            ClientArea:{
                screen: ClientArea,
                navigationOptions:{
                    gestureEnabled: false

                }
            }
        },
        {
            headerMode: 'none',
            mode: 'modal',
            initialRouteName: loggedIn ? "ClientArea": "HomeScreen"
        }
    );
};
