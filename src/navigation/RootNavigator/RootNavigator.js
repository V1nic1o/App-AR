// src/navigation/RootNavigator.js
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import AppNavigator from '../AppNavigator/AppNavigator';
import Loader from '../../components/Loader/Loader'; // ✅ Importamos el loader animado

const RootNavigator = () => {
  const { userToken, isLoading } = useContext(AuthContext);

  if (isLoading) {
    // 🌿 Pantalla de carga mientras verificamos el token
    return (
      <View style={styles.loadingContainer}>
        <Loader visible={true} /> {/* ✅ Usamos el loader animado */}
      </View>
    );
  }

  return userToken ? <AppNavigator /> : <AuthNavigator />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // ✅ fondo sólido en splash
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootNavigator;