import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.redText}>Hello World.</Text>
        <Hello />
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
  redText: {
    color: '#FF0707'
  }
});
