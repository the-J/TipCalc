import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: 'Hello'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.input}</Text>
        <TextInput
          style={styles.input}
          value={this.state.input}
          onChangeText={text => this.setState({ input: text })}
        />
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
    padding: 20
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
    fontSize: 35
  }
});
