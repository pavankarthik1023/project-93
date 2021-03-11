import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CustomSideBarMenu  from './CustomSideBarMenu';
import ReadingScreen  from '../screens/ReadingScreen';
import WrittingScreen from '../screens/WrittingScreen';
import SettingScreen from '../screens/SettingScreen';
import {TabNavigator} from "./AppTabNavigator"


export const AppDrawerNavigator = createDrawerNavigator(
{
    Home : {
        screen : TabNavigator
        },
    "Write Your Ideas" : {
        screen : WrittingScreen
    },
    "Explore Some Ideas" :{
        screen: ReadingScreen
    },
    Setting : {
        screen : SettingScreen
    }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
