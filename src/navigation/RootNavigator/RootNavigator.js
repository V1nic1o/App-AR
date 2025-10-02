// src/navigation/RootNavigator.js
import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import AppNavigator from '../AppNavigator/AppNavigator';

const RootNavigator = () => {
    const { userToken, isLoading } = useContext(AuthContext);

    if (isLoading) {
        // Pantalla de carga mientras verificamos el token
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return userToken ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;