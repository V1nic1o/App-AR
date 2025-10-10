// src/api/api.js
import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

// =============================
// 🌐 CONFIGURACIÓN AXIOS GLOBAL
// =============================
// ❌ Sin timeout — permitimos que Render responda cuando despierte.
const api = axios.create({
  baseURL: API_URL,
  // timeout eliminado
});

// =============================
// 🔑 INTERCEPTOR DE PETICIONES
// =============================
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// =============================
// 🧠 INTERCEPTOR DE RESPUESTAS
// =============================
// Detecta errores de red, backend y otros.
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.message === 'Network Error') {
      console.error('📡 Error de red al intentar conectar con:', error.config?.url);
    } else if (error.response) {
      console.error(`❌ Error ${error.response.status} en ${error.config?.url}`);
    } else {
      console.error('⚠️ Error inesperado:', error);
    }
    return Promise.reject(error);
  }
);

// =============================
// 🔁 FUNCIÓN DE REINTENTO SIMPLE
// =============================
// Esta lógica evita que la app falle si el backend aún está “despertando”.
// No hay timeout, solo reintenta un número limitado de veces.
const withRetry = async (fn, retries = 3, delay = 3000) => {
  let lastError;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.warn(`⏳ Reintento ${i + 1} de ${retries + 1} fallido...`);
      if (i < retries) await new Promise((res) => setTimeout(res, delay));
    }
  }
  throw lastError;
};

// =============================
// 🔐 LOGIN
// =============================
export const login = (email, password) => {
  const body = `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  return withRetry(() =>
    api.post('/token', body, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
  );
};

// 📝 REGISTRO
export const register = (email, password) => {
  const userData = { email, password };
  return withRetry(() => api.post('/users/', userData));
};

// 🌿 OBTENER DISEÑOS
export const getDesigns = () => {
  return withRetry(() => api.get('/designs/'));
};

// 🗑️ ELIMINAR DISEÑO
export const deleteDesign = (designId) => {
  return withRetry(() => api.delete(`/designs/${designId}`));
};

export default api;