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
import {Container, Header, Content, Accordion} from 'native-base';
import {YellowBox} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];
const Note = () => {
  const [text, setText] = useState('默认文本');
  return (
    <Container>
      <Content padder>
        <Accordion dataArray={dataArray} expanded={0} />
      </Content>
    </Container>
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
export default Note;
