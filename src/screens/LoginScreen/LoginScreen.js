import React, { useState, useContext } from 'react';
import {  Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../../context/AuthContext';
import { globalStyles } from '../../theme/globalStyles';
import Loader from '../../components/Loader/Loader';
import LoginForm from '../../components/Auth/LoginForm/LoginForm';

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  const handleLogin = async (email, password) => {
    if (!email || !password) {
      Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);
    try {
      await signIn(email, password);
    } catch (error) {
      console.error('Error de login:', error);
      Alert.alert('Error', 'No se pudo iniciar sesión. Verifica tus credenciales o la conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[globalStyles.safeArea, { backgroundColor: '#F5F7F5' }]}>
      <LoginForm onLogin={handleLogin} loading={loading} navigation={navigation} />
      <Loader visible={loading} />
    </SafeAreaView>
  );
};

export default LoginScreen;