// LoginActions.js
import React from 'react';
import { Button, Text } from 'react-native-paper';
import { colors } from '../../../theme/globalStyles';

const LoginActions = ({ onLoginPress, loading }) => (
  <Button
    mode="contained"
    onPress={onLoginPress}
    style={{
      backgroundColor: colors.primary,
      borderRadius: 12,
      paddingVertical: 12,
      width: '100%',
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
    }}
    labelStyle={{
      fontSize: 17,
      fontWeight: '600',
      color: '#FFF',
    }}
    loading={loading}
    disabled={loading}
  >
    <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 17 }}>
      {loading ? 'Ingresando...' : 'Iniciar Sesión'}
    </Text>
  </Button>
);

export default LoginActions;