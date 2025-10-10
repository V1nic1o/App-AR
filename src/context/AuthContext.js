import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as apiLogin } from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const signIn = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await apiLogin(email, password);
      const token = response.data?.access_token;

      if (!token) {
        throw new Error('Token inválido');
      }

      setUserToken(token);
      await AsyncStorage.setItem('userToken', token);
    } catch (error) {
      // 🚨 Manejo detallado de errores de red y credenciales
      if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
        console.error('❌ Error de red o timeout al intentar conectar con el backend.');
      } else if (error.response?.status === 401) {
        console.error('⚠️ Credenciales inválidas.');
      } else {
        console.error('Error inesperado en signIn:', error);
      }
      throw error; // Lo lanzamos para que la pantalla lo maneje visualmente
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    setUserToken(null);
    await AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
    } catch (error) {
      console.error('Error en isLoggedIn:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, userToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};