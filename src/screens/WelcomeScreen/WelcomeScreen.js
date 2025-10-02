import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';

// El prop { navigation } es inyectado automáticamente por React Navigation
const WelcomeScreen = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            {/* Aquí podrías poner un logo o una imagen grande */}
            <View style={styles.content}>
                <Text variant="displayMedium" style={[styles.title, { color: colors.primary }]}>
                    Jardín AR
                </Text>
                <Text variant="headlineSmall" style={styles.subtitle}>
                    Diseña el jardín de tus sueños en Realidad Aumentada.
                </Text>
            </View>
            <View style={styles.buttons}>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Iniciar Sesión
                </Button>
                <Button
                    mode="outlined"
                    onPress={() => navigation.navigate('Register')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Registrarse
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 40,
    },
    buttons: {
        width: '100%',
        paddingBottom: 40,
    },
    button: {
        marginTop: 10,
        paddingVertical: 8,
    },
    buttonLabel: {
        fontSize: 16,
    }
});

export default WelcomeScreen;