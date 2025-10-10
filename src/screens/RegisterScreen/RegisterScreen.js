import React, { useState } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { register } from '../../api/api';
import { globalStyles } from '../../theme/globalStyles';
import RegisterForm from '../../components/Auth/RegisterForm/RegisterForm';
import Loader from '../../components/Loader/Loader';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);
    try {
      await register(email, password);
      Alert.alert(
        '¡Registro Exitoso!',
        'Tu cuenta ha sido creada. Ahora puedes iniciar sesión.',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      if (error?.response?.status === 400) {
        Alert.alert('Error de Registro', 'Este correo electrónico ya está en uso.');
      } else {
        console.error('Error en el registro:', error?.response?.data || error.message);
        Alert.alert('Error de Registro', 'Ocurrió un problema al crear tu cuenta.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[globalStyles.safeArea, { backgroundColor: '#F5F7F5' }]}>
      <RegisterForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        onRegister={handleRegister}
        navigation={navigation}
      />
      <Loader visible={loading} />
    </SafeAreaView>
  );
};

export default RegisterScreen;