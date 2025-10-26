// RegisterFooter.js
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../../../theme/globalStyles';

const RegisterFooter = ({ onLoginPress, loading }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 25,
    }}
  >
    <Text style={{ color: colors.textDark }}>¿Ya tienes una cuenta? </Text>
    <TouchableOpacity onPress={onLoginPress} disabled={loading}>
      <Text style={{ color: colors.primaryDark, fontWeight: 'bold' }}>
        Inicia Sesión
      </Text>
    </TouchableOpacity>
  </View>
);

export default RegisterFooter;