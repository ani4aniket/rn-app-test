import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class CompoImage extends Component {
  render() {
    return <Image source={this.props.imageSource} styles={styles.image} />;
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
