// LoginHeader.js
import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../../../theme/globalStyles';

const LoginHeader = () => (
  <>
    {/* 🌿 Logo superior */}
    <Image
      source={require('../../../assets/tour-virtual.png')}
      style={{
        width: 160,
        height: 160,
        marginBottom: 25,
        alignSelf: 'center',
      }}
      resizeMode="contain"
    />

    {/* ✨ Título y subtítulo */}
    <Text
      variant="headlineLarge"
      style={{
        fontSize: 30,
        fontWeight: '800',
        color: colors.primaryDark,
        textAlign: 'center',
        marginBottom: 8,
      }}
    >
      Bienvenido de Nuevo
    </Text>
    <Text
      variant="bodyMedium"
      style={{
        textAlign: 'center',
        color: colors.textDark,
        marginBottom: 30,
      }}
    >
      Ingresa tus credenciales para continuar
    </Text>
  </>
);

export default LoginHeader;