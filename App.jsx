// App.jsx
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Text strings must be rendered', // Ignora solo este tipo de warning
]);

import React from 'react';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator/RootNavigator';

// 🎨 Tema global para react-native-paper
const paperTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#7C4DFF',
    background: '#FFFFFF',
    surface: '#FFFFFF',
  },
};

// 🎨 Tema global para react-navigation
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    card: '#FFFFFF',
    primary: '#7C4DFF',
    text: '#000000',
    border: 'rgba(0,0,0,0.06)',
  },
};

const App = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <AuthProvider>
        <NavigationContainer theme={navTheme}>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;