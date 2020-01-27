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
import {readFile, ExternalDirectoryPath} from '../../utils/file'
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
const Note = (props) => {
  const { navigation } = props
  const [questionList, setQuestionList] = useState([])
  const path = navigation.getParam('filePath')
  useEffect(() =>　{
    readFile(path).then(res => {
      let data = JSON.parse(res)
      let list = data.content.questionList.map(item => {
        return {
          title:　item.title,
          content: item.value
        }
      })
      setQuestionList(list)
    }).catch(err => {
      setQuestionList([])
    })
  }, [])
  return (
    <Container>
      <Content padder>
        <Accordion dataArray={questionList} expanded={0} />
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
