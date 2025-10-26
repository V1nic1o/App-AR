// src/screens/SurveyScreen/SurveyScreen.js

import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const SurveyScreen = ({ route, navigation }) => {
  // Recibimos la URL de la encuesta que queremos mostrar
  const { surveyUrl } = route.params;

  const handleClose = () => {
    console.log('El usuario ha finalizado la encuesta.');
    navigation.goBack(); // Simplemente regresa a la pantalla anterior
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* El WebView carga y muestra la página del Google Form */}
      <WebView source={{ uri: surveyUrl }} style={styles.webview} />

      {/* Añadimos un botón de "Finalizar" por si el usuario necesita salir */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeButtonText}>He terminado, volver a la app</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  webview: {
    flex: 1,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  closeButton: {
    backgroundColor: '#007AFF', // Un color azul estándar de iOS
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SurveyScreen;