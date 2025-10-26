// LoginForm.js
import React, { useState } from 'react';
// 1. IMPORTA LOS NUEVOS COMPONENTES
import {
  View,
  TouchableWithoutFeedback, // Importa para ocultar teclado
  Keyboard, // Importa para ocultar teclado
} from 'react-native';
import LoginHeader from './LoginHeader';
import LoginInputs from './LoginInputs';
import LoginActions from './LoginActions';
import LoginFooter from './LoginFooter';

const LoginForm = ({ onLogin, loading, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. CREA MANEJADORES PARA PASAR A LOS COMPONENTES HIJO
  const handleLoginPress = () => {
    onLogin(email, password);
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    // 3. ENVUELVE TODO EN 'TouchableWithoutFeedback' PARA OCULTAR TECLADO
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 25 }}>
        
        {/* 4. REEMPLAZA EL CÓDIGO ANTIGUO CON LOS NUEVOS COMPONENTES */}
        
        <LoginHeader />
        
        <LoginInputs
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loading={loading}
        />
        
        <LoginActions onLoginPress={handleLoginPress} loading={loading} />
        
        <LoginFooter onRegisterPress={handleRegisterPress} loading={loading} />
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;