import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Trial from './app/components/Trial';
const myData = require('./myData.json');

export default class App extends Component {
  render() {
    return (
      <View>
        <Trial data={myData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
