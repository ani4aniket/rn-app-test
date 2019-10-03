import React, {Component} from 'react';
import {View, Text} from 'react-native';

const generateElement = (key, value) => {
  return (
    <View key={key}>
      <Text>{key}</Text>
      <Text>{value}</Text>
    </View>
  );
};

function generateData(data) {
  const newData = Object.keys(data).reduce((result, currentKey) => {
    if (
      typeof data[currentKey] === 'string' ||
      data[currentKey] instanceof String
    ) {
      const elementToPush = generateElement(currentKey, data[currentKey]);
      result.push(elementToPush);
    } else {
      const nested = generateData(data[currentKey]);
      result.push(...nested);
    }
    return result;
  }, []);
  return newData;
}

export default class Trial extends Component {
  render() {
    const {data} = this.props;
    const hwyy = generateData(data);
    return <View>{hwyy}</View>;
  }
}
