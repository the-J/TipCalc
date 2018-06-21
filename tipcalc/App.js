import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      tip: 0,
      percent: 0.2
    };
  }

  calculateTip() {
    if (this.state.input) {
      tip = parseFloat(this.state.input) * this.state.percent;
      tip = (Math.round(tip * 100) / 100).toFixed(2);
      this.setState({ tip });
    }
  }

  render() {
    const { tip, percent } = this.state;

    return (
      <View style={styles.container}>
        <Text>
          ${tip} / default: {percent}
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.input}
          keyboardType="numeric"
          placeholder="0.00"
          onChangeText={value => {
            this.setState({ input: value }, () => this.calculateTip());
          }}
        />
        <View style={styles.buttonGroup}>
          <Button
            title="10%"
            onPress={() =>
              this.setState({ percent: 0.1 }, () => this.calculateTip())
            }
          />
          <Button
            title="20%"
            onPress={() =>
              this.setState({ percent: 0.2 }, () => this.calculateTip())
            }
          />
          <Button
            title="25%"
            onPress={() =>
              this.setState({ percent: 0.25 }, () => this.calculateTip())
            }
          />
        </View>
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
  },
  buttonGroup: {
    flexDirection: 'row'
  }
});
