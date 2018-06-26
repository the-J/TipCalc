import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { Button, TextInput, StyleSheet, View } from 'react-native';
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
    } else if (isNaN(tipCustom)) {
      this.setState(
        {
          tip: 0,
          tipValue: 0
        },
        () => this.calculateTip()
      );
    } else {
      this.setState(
        {
          tip: 0,
          tipValue: 1
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
    const { input, tipValue, loading } = this.state;

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

        <View style={styles.container}>
          <Content style={{ width: '100%' }}>
            <Values bill={input} tipPercentage={tipValue} />

            <View style={styles.inputsGroup}>
              <TextInput
                style={styles.input}
                value={input}
                keyboardType="numeric"
                placeholder="0"
                underlineColorAndroid="#FFF"
                placeholderTextColor="#FFF"
                onChangeText={value => this.setInput(value)}
              />

              <View style={styles.tipPercentageGroup}>
                <Button title="10%" onPress={() => this.setFixedTip(0.1)} />
                <Button title="20%" onPress={() => this.setFixedTip(0.2)} />
                <Button title="25%" onPress={() => this.setFixedTip(0.25)} />
                <TextInput
                  style={styles.inputCustomTip}
                  keyboardType="numeric"
                  placeholder="0"
                  underlineColorAndroid="#FFF"
                  placeholderTextColor="#FFF"
                  value={
                    this.state.tipValue
                      ? (this.state.tipValue * 100).toFixed().toString()
                      : ''
                  }
                  onChangeText={tipCustom => {
                    tipCustom = parseFloat(tipCustom) / 100;
                    tipCustom = (Math.round(tipCustom * 100) / 100).toFixed(2);
                    this.setCustomTip(tipCustom);
                  }}
                />
              </View>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  inputsGroup: {
    backgroundColor: '#212121',
    padding: 20
  },
  input: {
    height: 50,
    width: '100%',
    padding: 5,
    fontSize: 20,
    color: '#FFF'
  },
  tipPercentageGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputCustomTip: {
    height: 40,
    width: '30%',
    padding: 5,
    color: '#FFF'
  }
});
