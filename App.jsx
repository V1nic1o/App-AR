// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator/AuthNavigator'; // Importamos nuestro navegador

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;