// src/screens/ProfileScreen/ProfileScreen.js
import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
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
            Administra tu sesión y controla tu experiencia en Jardín AR 
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

        {/* 🌱 Botón */}
        <View style={styles.actions}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6d6b6b27',
  },
  scrollContent: {
    paddingVertical: 200,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    color: '#0a0a0aff',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  actions: {
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#f10d0ddc',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  logoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default ProfileScreen;