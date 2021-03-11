import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ReadingScreen from '../screens/ReadingScreen'
import DetailedScreen  from '../screens/DetailedScreen';




export const AppStackNavigator = createStackNavigator({
   Reading : {
    screen : ReadingScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  StoryPage : {
    screen : DetailedScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'Reading'
  }
);
