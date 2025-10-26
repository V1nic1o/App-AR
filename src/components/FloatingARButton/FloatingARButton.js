// src/navigation/components/FloatingARButton.js
import React from 'react';
import { FAB } from 'react-native-paper';
import { Platform } from 'react-native';
import { useARLauncher } from '../../hooks/useARLauncher/useARLauncher';
import { styles } from '../../navigation/AppNavigator.styles/AppNavigator.styles'; // Importamos los mismos estilos

const FloatingARButton = () => {
  // El botón ahora maneja su propia lógica internamente
  const { handleLaunchAR } = useARLauncher();

  return (
    <FAB
      style={styles.fab}
      icon="plus"
      onPress={handleLaunchAR} // Simplemente llama a la función del hook
      color="#FFF"
      customSize={Platform.OS === 'ios' ? 64 : 60}
    />
  );
};

export default FloatingARButton;