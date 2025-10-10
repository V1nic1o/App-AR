// src/theme/globalStyles.js
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#4CAF50',       // Verde principal 🌿
  primaryDark: '#2E7D32',   // Verde más intenso
  lightGreen: '#E8F5E9',    // Verde muy claro
  textDark: '#4F4F4F',      // Gris para subtítulos
  white: '#FFFFFF',
  black: '#000000',
};

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  imageLarge: {
    width: 250,
    height: 250,
  },
  title: {
    fontWeight: '800',
    fontSize: 42,
    color: colors.primaryDark,
    marginBottom: 10,
    letterSpacing: 1,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: colors.textDark,
    fontSize: 18,
    lineHeight: 26,
    maxWidth: 300,
  },
  buttonsContainer: {
    width: '100%',
    paddingBottom: 40,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    marginTop: 10,
    paddingVertical: 12,
    shadowColor: colors.black,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonSecondary: {
    backgroundColor: colors.lightGreen,
    borderRadius: 14,
    marginTop: 12,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: colors.primary,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonLabelPrimary: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.white,
  },
  buttonLabelSecondary: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.primaryDark,
  },
});