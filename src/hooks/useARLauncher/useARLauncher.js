// src/hooks/useARLauncher.js
import { useContext } from 'react';
import { Linking, Alert } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { API_URL } from '@env';

// Este es un "Hook" personalizado que encapsula toda la lógica de lanzamiento.
export const useARLauncher = () => {
  const { userToken } = useContext(AuthContext);

  const handleLaunchAR = async () => {
    if (!userToken) {
      Alert.alert(
        'Error',
        'No se ha podido obtener el token de usuario. Por favor, intenta iniciar sesión de nuevo.'
      );
      return;
    }

    const encodedToken = encodeURIComponent(userToken);
    const encodedApiUrl = encodeURIComponent(API_URL);
    const url = `jardinAR://launch?token=${encodedToken}&apiUrl=${encodedApiUrl}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          'Aplicación no encontrada',
          'Para crear un nuevo diseño, necesitas instalar la aplicación Jardín AR.'
        );
      }
    } catch (error) {
      console.error('Error en Linking:', error);
      Alert.alert('Error de Linking', 'Ocurrió un error al intentar abrir la URL.');
    }
  };

  // El hook devuelve la función para que cualquier componente la pueda usar.
  return { handleLaunchAR };
};