import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Ball } from '../../Components/Ball';

export const BallSlide = () => {
  const position = new Animated.ValueXY(0, 0);
  const moveBall = () => {
    let x = Math.floor(Math.random() * 300);
    let y = Math.floor(Math.random() * 500);
    Animated.spring(position, {
      toValue: { x, y },
      useNativeDriver: false,
    }).start();
  };

  const message = 'MOVE THE BALL';

  return (
    <View style={styles.container}>
      <View style={{ flexGrow: 1 }}>
        <Animated.View style={position.getLayout()}>
          <Ball />
        </Animated.View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => moveBall()}>
        <Text style={styles.buttonText}>{message}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
});
