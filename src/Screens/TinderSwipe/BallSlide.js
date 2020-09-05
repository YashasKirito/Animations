import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ball } from '../../Components/Ball';

export const BallSlide = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Ball />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
