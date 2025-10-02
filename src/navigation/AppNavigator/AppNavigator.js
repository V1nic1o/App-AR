// src/navigation/AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FAB } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Importamos las pantallas
import DashboardScreen from '../../screens/DashboardScreen/DashboardScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

// Este es un componente "falso" que usaremos para el botón central
const PlaceholderComponent = () => <View />;

const AppNavigator = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#6200ee', // Color de ícono activo (puedes cambiarlo)
                }}
            >
                <Tab.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        title: 'Mis Diseños',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Create"
                    component={PlaceholderComponent} // Pantalla vacía
                    options={{
                        title: '', // Sin texto
                        tabBarButton: () => null, // Ocultamos el botón del tab
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: 'Perfil',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => console.log('Presionado: Abrir Unity')}
            />
        </>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: '41%', // Posicionamiento aproximado en el centro
        bottom: 30,
    },
});

export default AppNavigator;