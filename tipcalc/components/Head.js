import React, { Component } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { Header, Left, Right, Body, Title } from 'native-base';

export default class Head extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Header>
          <Left>
            <Body>
              <Title>Header</Title>
            </Body>
          </Left>

          <Right />
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});
