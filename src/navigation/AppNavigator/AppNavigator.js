// src/navigation/AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native'; // Mantenemos View para el Placeholder
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// --- IMPORTACIONES MODIFICADAS ---
import { styles } from '../AppNavigator.styles/AppNavigator.styles'; // Asumo que el .js es opcional
import { useARLauncher } from '../../hooks/useARLauncher/useARLauncher'; // Importamos el hook

// --- IMPORTACIONES DE SCREENS ---
import DashboardScreen from '../../screens/DashboardScreen/DashboardScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
// Importamos la nueva pantalla de Manual
import ManualScreen from '../../screens/ManualScreen/ManualScreen';

const Tab = createBottomTabNavigator();

// Todavía necesitamos un componente vacío para la pestaña de "Crear"
const PlaceholderComponent = () => <View />;

const AppNavigator = () => {
  // Obtenemos la función para lanzar AR desde nuestro hook
  const { handleLaunchAR } = useARLauncher();

  return (
    // Ya no necesitamos el Fragment (<>), solo el Navigator
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#2E7D32',
        tabBarInactiveTintColor: '#777',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerTitle,
        headerStyle: styles.headerStyle,
      }}
    >
      {/* --- PESTAÑA 1: MIS DISEÑOS (Sin cambios) --- */}
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

            {/* --- PESTAÑA 3: CREAR AR (Reemplaza al FAB) --- */}
      <Tab.Screen
        name="CreateAR"
        component={PlaceholderComponent} // No va a ninguna pantalla
        options={{
          title: 'Crear diseño',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'plus-box' : 'plus-box-outline'} // Icono '+'
              color={color}
              size={size}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // Prevenimos la navegación a la pantalla vacía
            e.preventDefault();
            // Ejecutamos la misma lógica que tenía el botón azul
            handleLaunchAR();
          },
        }}
      />

      {/* --- PESTAÑA 2: MANUAL (Nueva) --- */}
      <Tab.Screen
        name="Manual"
        component={ManualScreen} // Navega a la nueva pantalla
        options={{
          title: 'Manual de usuario',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'book-open-page-variant' : 'book-open-page-variant-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />


      {/* --- PESTAÑA 4: PERFIL (Sin cambios, ahora es la 4ta) --- */}
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
  );
};

export default AppNavigator;