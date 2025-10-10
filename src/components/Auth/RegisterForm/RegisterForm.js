import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { colors } from '../../../theme/globalStyles';

const RegisterForm = ({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  onRegister,
  navigation
}) => {
  return (
    <View style={{ justifyContent: 'center', paddingHorizontal: 25, flex: 1 }}>

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
        Crear Cuenta
      </Text>
      <Text
        variant="bodyMedium"
        style={{
          textAlign: 'center',
          color: colors.textDark,
          marginBottom: 30,
        }}
      >
        Ingresa tus datos para registrarte
      </Text>

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

      {/* 🚀 Botón de Registro */}
      <Button
  mode="contained"
  onPress={onRegister}
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
    {loading ? 'Creando cuenta...' : 'Registrarse'}
  </Text>
</Button>

      {/* 📝 Footer */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 25,
        }}
      >
        <Text style={{ color: colors.textDark }}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} disabled={loading}>
          <Text style={{ color: colors.primaryDark, fontWeight: 'bold' }}>Inicia Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;