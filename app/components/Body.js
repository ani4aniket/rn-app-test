import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CompoImage from './CompoImage';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <CompoImage imageSource={require('../img/img3.jpg')} />
        </View>
        <View style={styles.column2}>
          <CompoImage imageSource={require('../img/img3.jpg')} />
        </View>
        <View style={styles.full}>
          {/* <CompoImage imageSource={require('../img/img3.jpg')} /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    backgroundColor: '#c1c1c1',
  },
  column1: {
    flex: 1,
    padding: 5,
  },
  column2: {
    flex: 2,
    padding: 5,
  },
  full: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
