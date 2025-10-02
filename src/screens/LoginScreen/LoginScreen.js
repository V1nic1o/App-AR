// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { login } from '../../api/api'; // Importamos nuestra función de API

const LoginScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Estado para el indicador de carga

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }
        setLoading(true);
        
        // --- LÍNEA DE DIAGNÓSTICO AÑADIDA ---
        console.log('Intentando iniciar sesión con -> username:', email, 'password:', password);

        try {
            const response = await login(email, password);
            const accessToken = response.data.access_token;

            console.log('Login exitoso! Token:', accessToken);
            Alert.alert('¡Éxito!', 'Has iniciado sesión correctamente.');

        } catch (error) {
            console.error('Error en el login:', error.response?.data || error.message);
            Alert.alert('Error de autenticación', 'El correo o la contraseña son incorrectos.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.title}>Bienvenido de Nuevo</Text>
            <TextInput
                label="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                disabled={loading}
            />
            <TextInput
                label="Contraseña"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
                disabled={loading} 
            />
            <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.button}
                loading={loading}
                disabled={loading} 
            >
                {loading ? 'Ingresando...' : 'Iniciar Sesión'}
            </Button>
            <View style={styles.footer}>
                <Text>¿No tienes una cuenta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} disabled={loading}>
                    <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Regístrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { textAlign: 'center', marginBottom: 24 },
    input: { marginBottom: 16 },
    button: { marginTop: 8, paddingVertical: 8 },
    footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 }
});

export default LoginScreen;