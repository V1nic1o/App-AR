// RegisterForm.js
import React from 'react';
// 1. IMPORTA LOS NUEVOS COMPONENTES
import {
  View,
  TouchableWithoutFeedback, // Importa para ocultar teclado
  Keyboard, // Importa para ocultar teclado
} from 'react-native';
import RegisterHeader from './RegisterHeader';
import RegisterInputs from './RegisterInputs';
import RegisterActions from './RegisterActions';
import RegisterFooter from './RegisterFooter';

const RegisterForm = ({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  onRegister,
  navigation,
}) => {
  // 2. CREA UN MANEJADOR PARA EL FOOTER
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    // 3. ENVUELVE TODO EN 'TouchableWithoutFeedback' PARA OCULTAR TECLADO
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ justifyContent: 'center', paddingHorizontal: 25, flex: 1 }}>

        {/* 4. REEMPLAZA EL CÓDIGO ANTIGUO CON LOS NUEVOS COMPONENTES */}

        <RegisterHeader />

        <RegisterInputs
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loading={loading}
        />

        <RegisterActions onRegisterPress={onRegister} loading={loading} />

        <RegisterFooter onLoginPress={handleLoginPress} loading={loading} />
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterForm;