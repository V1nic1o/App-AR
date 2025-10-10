// src/components/Loader/Loader.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        source={require('../../assets/animations/loader.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    elevation: 999,
  },
  animation: {
    width: 400,
    height: 400,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
  },
});

export default Loader;