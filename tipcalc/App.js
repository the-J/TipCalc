import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { Button, TextInput, StyleSheet, Text, View, Alert } from 'react-native';
import { Root, Container, Content } from 'native-base';

import Head from './components/Head';
import Values from './components/Values';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      tip: 0,

      tipValue: 0,
      tipFixed: 0.2,

      loading: true
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });

    this.setState({ loading: false });
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
    if (tipCustom !== 0 && tipCustom <= 1) {
      this.setState(
        {
          tip: tipCustom,
          tipValue: tipCustom
        },
        () => this.calculateTip()
      );
    } else {
      this.setState(
        {
          tip: 0,
          tipValue: 0
        },
        () => this.calculateTip()
      );
    }
  }

  calculateTip() {
    if (this.state.input.length) {
      tip = parseFloat(this.state.input) * this.state.tipValue;
      tip = (Math.round(tip * 100) / 100).toFixed(2);

      this.setState({ tip });
    } else {
      this.setState({ tip: 0, input: '' });
    }
  }

  render() {
    const { input, tip, tipValue, loading } = this.state;

    if (loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return (
      <Container>
        <Head />

        <Content padder>
          <View style={styles.container}>
            <Values bill={input} tipPercentage={tipValue} />

            <TextInput
              style={styles.input}
              value={input}
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
                  this.state.tipValue
                    ? (this.state.tipValue * 100).toString()
                    : ''
                }
                onChangeText={tipCustom => {
                  tipCustom = parseFloat(tipCustom) / 100;
                  tipCustom = (Math.round(tipCustom * 100) / 100).toFixed(2);
                  this.setCustomTip(tipCustom);
                }}
              />

              <Text>%</Text>
            </View>
          </View>
        </Content>
      </Container>
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
