/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './pages/home/Home'
import DetailsScreen from './pages/details/Details'
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
},{
  initialRouteName: 'Home',
});
const AppContainer = createAppContainer(AppNavigator);
const App: () => React$Node = () => {
  return (
    <>
      <AppContainer/>
    </>
  );
};

const styles = StyleSheet.create({
  inputBox: {flex: 1, backgroundColor: '#fff', flexDirection: 'row', height:40}
});

export default createAppContainer(AppNavigator);
