import React, {useState, useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './home';
import SettingsScreen from './settings';
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});
export default createAppContainer(TabNavigator);
