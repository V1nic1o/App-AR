// LoginFooter.js
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../../../theme/globalStyles';

const LoginFooter = ({ onRegisterPress, loading }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 25,
    }}
  >
    <Text style={{ color: colors.textDark }}>¿No tienes una cuenta? </Text>
    <TouchableOpacity onPress={onRegisterPress} disabled={loading}>
      <Text style={{ color: colors.primaryDark, fontWeight: 'bold' }}>
        Regístrate
      </Text>
    </TouchableOpacity>
  </View>
);

export default LoginFooter;