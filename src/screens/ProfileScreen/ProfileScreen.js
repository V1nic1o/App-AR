// src/screens/ProfileScreen/ProfileScreen.js
import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Linking, // <-- 1. IMPORTAMOS LINKING
} from 'react-native';
import { Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../context/AuthContext';
import Loader from '../../components/Loader/Loader';

const ProfileScreen = () => {
  const { signOut } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    } finally {
      setLoading(false);
    }
  };

  // --- 2. AÑADIMOS LA FUNCIÓN PARA ABRIR ENLACES ---
  const handleOpenURL = async (url) => {
    // Comprueba si el enlace puede ser abierto
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // Abre el enlace en el navegador del teléfono
      await Linking.openURL(url);
    } else {
      // Muestra una alerta o un log si no se puede abrir
      Alert.alert(`No se puede abrir esta URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ✨ Subtítulo */}
        <View style={styles.textContainer}>
          <Text variant="headlineSmall" style={styles.subtitle}>
            Administra tu sesión y ayúdanos a mejorar tu experiencia
          </Text>
        </View>

        {/* 🌿 Imagen */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/jardinero.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* --- 3. SECCIÓN DE BOTONES MODIFICADA --- */}
        <View style={styles.actions}>
          {/* Botón Encuesta Pre-Uso */}
          <TouchableOpacity
            style={styles.surveyButton}
            onPress={() => handleOpenURL('https://forms.gle/jyFijyJgW7Zc2xvj8')} // <-- REEMPLAZA ESTA URL
            activeOpacity={0.85}
          >
            <MaterialCommunityIcons name="clipboard-text-outline" size={24} color="#fff" />
            <Text style={styles.surveyButtonText}>Encuesta (Antes de Usar AR)</Text>
          </TouchableOpacity>

          {/* Botón Encuesta Post-Uso */}
          <TouchableOpacity
            style={styles.surveyButton}
            onPress={() => handleOpenURL('https://forms.gle/wGNsxbi4Kx8rCk4v5')} // <-- REEMPLAZA ESTA URL
            activeOpacity={0.85}
          >
            <MaterialCommunityIcons name="clipboard-check-outline" size={24} color="#fff" />
            <Text style={styles.surveyButtonText}>Encuesta (Después de Usar AR)</Text>
          </TouchableOpacity>
          
          {/* Separador Visual */}
          <View style={styles.separator} />

          {/* Botón Cerrar Sesión */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleSignOut}
            activeOpacity={0.85}
          >
            <MaterialCommunityIcons name="logout" size={24} color="#fff" />
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 🌀 Loader Global */}
      <Loader visible={loading} />
    </View>
  );
};

// --- 4. AÑADIMOS LOS NUEVOS ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Un fondo más claro
  },
  scrollContent: {
    paddingTop: 100, // Menos padding superior para que se vea mejor
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18, // Ajuste de tamaño de fuente
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 180,
    height: 180,
  },
  actions: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  surveyButton: {
    flexDirection: 'row',
    backgroundColor: '#007AFF', // Azul estándar para acciones principales
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginBottom: 15,
    width: '90%', // Ocupa el 90% del ancho
  },
  surveyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: '#E0E0E0', // Un gris más suave
    marginVertical: 25,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#D9534F', // Un rojo menos estridente
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    width: '90%',
  },
  logoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default ProfileScreen;