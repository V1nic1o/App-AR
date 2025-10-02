import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const DashboardScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={{ color: colors.primary }}>Mis Diseños</Text>
      <Text variant="bodyLarge" style={styles.placeholder}>
        Aquí se mostrará la lista de tus diseños guardados.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholder: {
    marginTop: 16,
    textAlign: 'center',
  },
});

export default DashboardScreen;