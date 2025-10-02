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
            const token = response.data.access_token;
            setUserToken(token);
            await AsyncStorage.setItem('userToken', token);
        } catch (error) {
            console.error('Error en signIn:', error);
            throw error; // Lanzamos el error para que la pantalla de Login lo maneje
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