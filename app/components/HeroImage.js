import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class HeroImage extends Component {
  render() {
    return <Image source={require('../img/img1.jpg')} style={styles.hero} />;
  }
}

const styles = StyleSheet.create({
  hero: {
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
