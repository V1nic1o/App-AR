// LoginInputs.js
import React from 'react';
import { TextInput } from 'react-native-paper';
import { colors } from '../../../theme/globalStyles';

const LoginInputs = ({ email, setEmail, password, setPassword, loading }) => (
  <>
    {/* 📧 Correo */}
    <TextInput
      label="Correo Electrónico"
      value={email}
      onChangeText={setEmail}
      mode="outlined"
      outlineColor={colors.primary}
      activeOutlineColor={colors.primary}
      textColor={colors.textDark}
      style={{
        marginBottom: 16,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
      }}
      keyboardType="email-address"
      autoCapitalize="none"
      disabled={loading}
    />

    {/* 🔐 Contraseña */}
    <TextInput
      label="Contraseña"
      value={password}
      onChangeText={setPassword}
      mode="outlined"
      outlineColor={colors.primary}
      activeOutlineColor={colors.primary}
      textColor={colors.textDark}
      style={{
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
      }}
      secureTextEntry
      disabled={loading}
    />
  </>
);

export default LoginInputs;