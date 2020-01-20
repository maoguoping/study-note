/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StyleSheet} from 'react-native';

import IndexScreen from './pages';
import DetailScreen from './pages/details';
import ModalScreen from './components/modal/Modal';
const MainStack = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
      navigationOptions: {
        title: '首页',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Details: {
      screen: DetailScreen,
      navigationOptions: {
        title: '详情',
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  {
    initialRouteName: 'Index',
  },
);
const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'card',
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(RootStack);
const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 40,
  },
});

export default createAppContainer(RootStack);
