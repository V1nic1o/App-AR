import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';

const ProfileScreen = () => {
    const { colors } = useTheme();
    const { signOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={{ color: colors.primary }}>Perfil de Usuario</Text>
            <Text variant="bodyLarge" style={styles.placeholder}>
                Información del usuario y ajustes.
            </Text>
            <Button
                icon="logout"
                mode="contained"
                onPress={() => signOut()}
                style={styles.button}
            >
                Cerrar Sesión
            </Button>
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
    placeholder: {
        marginTop: 16,
        marginBottom: 32,
    },
    button: {
        width: '80%',
    },
});

export default ProfileScreen;