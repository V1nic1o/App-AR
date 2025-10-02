// App.jsx (o App.js)
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext'; // 1. Importamos nuestro proveedor
import RootNavigator from './src/navigation/RootNavigator/RootNavigator';   // 2. Importamos el navegador raíz

const App = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;