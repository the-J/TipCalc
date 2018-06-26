import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Value = ({ bill, tipPercentage }) => {
  let tip = 0.0;

  if (bill && bill.length) {
    tip = parseFloat(bill) * tipPercentage;
    tip = (Math.round(tip * 100) / 100).toFixed(2);
  } else {
    tip = 0.0;
  }

  return (
    <View>
      <Text>
        ${tip} / tip: {tipPercentage} of the value
      </Text>
    </View>
  );
};

export default Values;
