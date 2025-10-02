// src/api/api.js
import axios from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
});

// --- FUNCIÓN DE LOGIN (CORREGIDA) ---
export const login = (email, password) => {
  // Construimos manualmente la cadena en formato x-www-form-urlencoded.
  // Esto es más robusto y compatible con todos los entornos de JavaScript.
  const body = `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

  return api.post('/token', body, {
    headers: {
      // Es crucial que esta cabecera esté presente para que FastAPI entienda el formato.
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

// --- FUNCIÓN DE REGISTRO (SIN CAMBIOS, YA ESTABA CORRECTA) ---
export const register = (email, password) => {
  // El endpoint de registro espera un cuerpo JSON, lo cual es diferente al login.
  const userData = {
    email: email,
    password: password,
  };

  return api.post('/users/', userData);
};

export default api;