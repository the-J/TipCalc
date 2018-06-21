import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      tip: 0,

      tipValue: 0,
      tipFixed: 0.2
    };
  }

  setInput(input) {
    if (input && input !== '0') {
      this.setState({ input }, () => this.calculateTip());
    } else {
      this.setState({ input: '', tip: 0 });
    }
  }

  setFixedTip(tipFixed) {
    this.setState({ tipValue: tipFixed }, () => this.calculateTip());
  }

  setCustomTip(tipCustom) {
    console.log('tipCustom', typeof tipCustom, tipCustom);
    if (
      tipCustom.length &&
      tipCustom !== '0' &&
      tipCustom.length < 4 &&
      parseFloat(tipCustom) <= 100
    ) {
      this.setState({
        tip: parseFloat(tipCustom) / 100,
        tipValue: parseFloat(tipCustom) / 100
      });
    } else {
      this.setState({
        tip: 0,
        tipValue: 0
      });
    }

    this.calculateTip();
  }

  calculateTip() {
    console.log(
      this.state.tipValue,
      this.state.input,
      typeof this.state.input,
      this.state.input && this.state.tipValue !== 0
    );

    if (this.state.input.length) {
      tip = parseFloat(this.state.input) * this.state.tipValue;
      tip = (Math.round(tip * 100) / 100).toFixed(2);

      this.setState({ tip });
    } else {
      this.setState({ tip: 0, input: '' });
    }
  }

  render() {
    const { tip, tipValue } = this.state;

    return (
      <View style={styles.container}>
        <Text>
          ${tip} / tip: {tipValue} of the value
        </Text>

        <TextInput
          style={styles.input}
          value={this.state.input}
          keyboardType="numeric"
          placeholder="0.00"
          onChangeText={value => this.setInput(value)}
        />

        <View style={styles.buttonGroup}>
          <Button title="10%" onPress={() => this.setFixedTip(0.1)} />
          <Button title="20%" onPress={() => this.setFixedTip(0.2)} />
          <Button title="25%" onPress={() => this.setFixedTip(0.25)} />
        </View>

        <View style={styles.customTip}>
          <TextInput
            style={styles.customTipInput}
            keyboardType="numeric"
            placeholder="0.00"
            value={
              this.state.tipValue ? (this.state.tipValue * 100).toString() : ''
            }
            onChangeText={tipCustom => this.setCustomTip(tipCustom)}
          />

          <Text>%</Text>
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
  },
  customTip: {
    flexDirection: 'row',
    padding: 20
  },
  customTipInput: {
    height: 30,
    width: '60%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5
  }
});
