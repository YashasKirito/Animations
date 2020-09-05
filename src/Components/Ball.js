import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Ball = (props) => {
  return <View style={styles.ball} />;
};

const styles = StyleSheet.create({
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 30,
    backgroundColor: 'black',
  },
});
