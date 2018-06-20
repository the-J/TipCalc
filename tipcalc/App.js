import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      tip: 0
    };
  }

  calculateTip() {
    if (this.state.input) {
      tip = parseFloat(this.state.input) * 0.2;
      tip = (Math.round(tip * 100) / 100).toFixed(2);
      this.setState({ tip });
    }
  }

  render() {
    const { tip } = this.state;

    return (
      <View style={styles.container}>
        <Text>${tip}</Text>
        <TextInput
          style={styles.input}
          value={this.state.input}
          keyboardType="numeric"
          placeholder="0.00"
          onChangeText={value => {
            this.setState({ input: value }, () => this.calculateTip());
          }}
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
