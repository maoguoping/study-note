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

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Home: () => React$Node = props => {
  const [text, setText] = useState('默认文本');
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'skyblue', flexDirection: 'row'}}>
        <TextInput
          placeholder="Type here to translate!"
          style={styles.inputBox}
          onChangeText={text => {
            setText(text);
          }}></TextInput>
        <Text
          style={{flex: 1, backgroundColor: 'skyblue', flexDirection: 'row'}}>
          {text}
        </Text>
        <Button
          title="跳转详情页"
          onPress={() => props.navigation.navigate('Details')}
        />
        <Button
          onPress={() => props.navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      </View>
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
export default Home;
