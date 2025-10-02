// src/api/api.js
import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage'; // 1. Importamos AsyncStorage

const api = axios.create({
  baseURL: API_URL,
});

// --- 2. INTERCEPTOR DE PETICIONES ---
// Este código se ejecuta ANTES de cada petición que hagamos con 'api'
api.interceptors.request.use(
  async (config) => {
    // Obtenemos el token del almacenamiento
    const token = await AsyncStorage.getItem('userToken');

    // Si el token existe, lo añadimos a la cabecera de Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Devolvemos la configuración para que la petición continúe
    return config;
  },
  (error) => {
    // Manejamos cualquier error que ocurra al configurar la petición
    return Promise.reject(error);
  }
);


// --- FUNCIÓN DE LOGIN (SIN CAMBIOS) ---
export const login = (email, password) => {
  const body = `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

  return api.post('/token', body, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

// --- FUNCIÓN DE REGISTRO (SIN CAMBIOS) ---
export const register = (email, password) => {
  const userData = {
    email: email,
    password: password,
  };

  return api.post('/users/', userData);
};

// --- 3. NUEVA FUNCIÓN PARA OBTENER DISEÑOS (YA ESTARÁ AUTENTICADA) ---
export const getDesigns = () => {
  return api.get('/designs/');
};


export default api;