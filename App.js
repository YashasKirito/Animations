import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BallSlide } from './src/Screens/TinderSwipe/BallSlide';

export default function App() {
  return <BallSlide />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
