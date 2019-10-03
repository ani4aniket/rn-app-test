import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('../img/cartlogo.png')} style={styles.logo} />
        <Text style={styles.title}>LCO Shopping Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    marginTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
    width: Dimensions.get('window').width,
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    fontStyle: 'italic',
  },
});
