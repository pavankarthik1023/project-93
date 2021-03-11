import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import WelcomeScreen from './screens/WelcomeScreen';
import {TabNavigator} from "./components/AppTabNavigator"
import {AppDrawerNavigator} from './components/AppDrawerNavigator';


export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}



const switchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Drawer: {screen : AppDrawerNavigator},
  BottomTab: {screen: TabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);




