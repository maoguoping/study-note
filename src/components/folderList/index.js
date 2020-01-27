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
import useFolderList from './useFolderList'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const FolderList = props => {
  const { folderList, isRoot, back, viewFiles} = useFolderList('mgp');
  return (
    <Content>
        {
            !isRoot && <Button onPress={() => {back()}} title="返回"></Button>
        }
    
    <List>
    {
        folderList.map((item, index) => {
        return <ListItem key={index} onPress={() => {viewFiles(index, props.openFile)}}>
            <Text >{item.name}</Text>
        </ListItem>
        })
    }
    </List>
</Content>
  );
};

export default FolderList;
