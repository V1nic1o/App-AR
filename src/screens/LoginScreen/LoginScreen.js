// src/screens/LoginScreen.js
import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext'; // 1. Importamos el Context

const LoginScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useContext(AuthContext); // 2. Usamos la función signIn del Context

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }
        setLoading(true);
        try {
            // 3. Llamamos a la función del context en lugar de a la API directamente
            await signIn(email, password);
            // La navegación ahora se maneja automáticamente en RootNavigator,
            // por lo que no necesitamos hacer nada aquí después del éxito.
        } catch (error) {
            console.error('Error de login en la pantalla:', error);
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