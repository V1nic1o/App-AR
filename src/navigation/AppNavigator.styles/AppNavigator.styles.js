// src/navigation/AppNavigator.styles.js
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 75,
    backgroundColor: '#f2eeee',
    borderTopWidth: 0,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#060606ff',
  },
  headerStyle: {
    backgroundColor: '#f2eeee',
    elevation: 0,
    shadowOpacity: 0,
  },
  // --- ESTILO 'fab' ELIMINADO ---
});