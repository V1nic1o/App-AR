// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { register } from '../../api/api'; // Importamos la nueva función de API

const RegisterScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }
        setLoading(true);
        try {
            await register(email, password);
            
            Alert.alert(
                '¡Registro Exitoso!',
                'Tu cuenta ha sido creada. Ahora puedes iniciar sesión.',
                [
                    { text: 'OK', onPress: () => navigation.navigate('Login') } // Redirigimos al Login
                ]
            );

        } catch (error) {
            // Nuestro backend devuelve un error 400 si el email ya existe
            if (error.response && error.response.status === 400) {
                Alert.alert('Error de Registro', 'Este correo electrónico ya está en uso.');
            } else {
                console.error('Error en el registro:', error.response?.data || error.message);
                Alert.alert('Error de Registro', 'Ocurrió un problema al crear tu cuenta.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.title}>Crea tu Cuenta</Text>
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
                onPress={handleRegister}
                style={styles.button}
                loading={loading}
                disabled={loading}
            >
                {loading ? 'Creando cuenta...' : 'Registrarse'}
            </Button>
            <View style={styles.footer}>
                <Text>¿Ya tienes una cuenta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} disabled={loading}>
                    <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Inicia Sesión</Text>
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

export default RegisterScreen;