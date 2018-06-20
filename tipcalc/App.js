import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1} />
        <View style={styles.view2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view1: {
    backgroundColor: '#FF00FF',
    flex: 3,
    height: '100%'
  },
  view2: {
    backgroundColor: '#00FFFF',
    flex: 1,
    height: '100%'
  }
});
