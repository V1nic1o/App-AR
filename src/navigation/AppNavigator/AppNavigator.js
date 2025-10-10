// src/navigation/AppNavigator.js
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FAB } from 'react-native-paper';
import { View, StyleSheet, Linking, Alert, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../context/AuthContext';
import { API_URL } from '@env';

import DashboardScreen from '../../screens/DashboardScreen/DashboardScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const PlaceholderComponent = () => <View />;

const AppNavigator = () => {
  const { userToken } = useContext(AuthContext);

  const handleLaunchAR = async () => {
    if (!userToken) {
      Alert.alert(
        'Error',
        'No se ha podido obtener el token de usuario. Por favor, intenta iniciar sesión de nuevo.'
      );
      return;
    }

    const encodedToken = encodeURIComponent(userToken);
    const encodedApiUrl = encodeURIComponent(API_URL);
    const url = `jardinAR://launch?token=${encodedToken}&apiUrl=${encodedApiUrl}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          'Aplicación no encontrada',
          'Para crear un nuevo diseño, necesitas instalar la aplicación Jardín AR.'
        );
      }
    } catch (error) {
      console.error('Error en Linking:', error);
      Alert.alert('Error de Linking', 'Ocurrió un error al intentar abrir la URL.');
    }
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#2E7D32', // Verde activo elegante
          tabBarInactiveTintColor: '#777',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerStyle,
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'Mis Diseños',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="CreatePlaceholder"
          component={PlaceholderComponent}
          options={{
            title: '',
            tabBarIcon: () => null,
          }}
          listeners={{
            tabPress: (e) => e.preventDefault(),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'account' : 'account-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={handleLaunchAR}
        color="#FFF"
        customSize={Platform.OS === 'ios' ? 64 : 60}
      />
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 75,
    backgroundColor: '#f2eeee',
    borderTopWidth: 0,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#060606ff',
  },
  headerStyle: {
    backgroundColor: '#f2eeee',
    elevation: 0,
    shadowOpacity: 0,
  },
  fab: {
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
    backgroundColor: '#0f8ae9ff',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default AppNavigator;