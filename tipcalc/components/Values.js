import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Values = ({ bill, tipPercentage }) => {
  let tip = 0.0;
  let total = 0.0;

  if (bill && bill.length) {
    tip = parseFloat(bill) * tipPercentage;
    tip = (Math.round(tip * 100) / 100).toFixed(2);

    total = (Number.parseFloat(bill) + Number.parseFloat(tip)).toFixed(2);
  } else {
    tip = 0.0;
    total = bill ? bill : 0.0;
  }

  const precentage = (parseFloat(tipPercentage) * 100).toFixed();

  return (
    <View style={styles.values}>
      <View style={styles.row}>
        <Text style={styles.total}>Total: </Text>
        <Text style={styles.total}>$ {total}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.tip}>Tip: </Text>
        <Text style={styles.tip}>
          {tip} $ / {precentage} %
        </Text>
      </View>
    </View>
  );
};

export default Values;

const styles = StyleSheet.create({
  values: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#484848',
    width: '100%'
  },
  row: {
    flexDirection: 'row'
  },
  total: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold'
  },
  tip: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  }
});
