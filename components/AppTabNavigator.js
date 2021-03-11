import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadingScreen from '../screens/ReadingScreen';
import WrittingScreen from '../screens/WrittingScreen';
import {AppStackNavigator} from './AppStackNavigator'

export const TabNavigator = createBottomTabNavigator({
    Reading: {
      screen: AppStackNavigator,  
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/readingtab.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "Read Some Ideas",
      }
    },
    Writing: {screen: WrittingScreen,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/writingtab.jpg")} style={{width:20, height:20}}/>,
        tabBarLabel : "Write Your Ideas",
      }
    },
  });