/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base'
import FolderList from '../../components/folderList'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Home = props => {
  const [folderList, setFolderList] = useState([]);
  const openFile = (file) => {
    props.navigation.navigate('Note', {
      filePath: file.path
    })
  }
  return (
    <Container>
      <Content>
        <FolderList openFile={openFile}></FolderList>
      </Content>
    </Container>
  );
};
export default Home;
