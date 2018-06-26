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
    <View>
      <Text>Total: $ {total}</Text>
      <Text>Tip: $ {tip}</Text>
      <Text>Tip {precentage} %</Text>
    </View>
  );
};

export default Values;
