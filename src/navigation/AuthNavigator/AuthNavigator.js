// src/navigation/AuthNavigator/AuthNavigator.js
import React from 'react';
// --- CORRECCIÓN 1: Importamos desde 'native-stack' ---
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos las pantallas (las rutas ya están corregidas)
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';

// --- CORRECCIÓN 2: Usamos la función importada ---
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false // Ocultamos la barra de título superior para un look más limpio
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;