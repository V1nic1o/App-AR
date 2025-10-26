// src/screens/DashboardScreen/DashboardScreen.js
import React, { useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, Alert, Modal } from 'react-native';
import { Text, Button, ActivityIndicator } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { getDesigns, deleteDesign } from '../../api/api';
import DesignCard from '../../components/Dashboard/DesignCard/DesignCard';

const DashboardScreen = () => {
  const [designs, setDesigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchDesigns = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getDesigns();
      setDesigns(response.data);
    } catch (err) {
      setError('No se pudieron cargar los diseños.');
      console.error('Error fetching designs:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchDesigns();
    }, [])
  );

  const handleDelete = (designId) => {
    Alert.alert(
      'Confirmar Eliminación',
      '¿Estás seguro de que quieres eliminar este diseño?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              setIsProcessing(true);
              await deleteDesign(designId);
              setDesigns((prev) => prev.filter((d) => d.id !== designId));
            } catch (err) {
              console.error('Error deleting design:', err);
              Alert.alert('Error', 'No se pudo eliminar el diseño.');
            } finally {
              setIsProcessing(false);
            }
          },
        },
      ]
    );
  };

  const handleDownloadComplete = (success, message) => {
    setDownloadingId(null);

    if (!success) {
      Alert.alert('Error', message || 'No se pudo abrir el PDF.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Estado de carga */}
      {isLoading && (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#2E7D32" />
          <Text style={styles.loadingText}>Cargando tus diseños...</Text>
        </View>
      )}

      {/* Estado de error */}
      {!isLoading && error && (
        <View style={styles.centerContainer}>
          <Text>{error}</Text>
          <Button mode="contained" onPress={fetchDesigns}>
            Reintentar
          </Button>
        </View>
      )}

      {/* Lista principal */}
      {!isLoading && !error && (
        <FlatList
          data={designs}
          renderItem={({ item }) => (
            <DesignCard
              item={item}
              downloadingId={downloadingId}
              setDownloadingId={setDownloadingId}
              onDelete={handleDelete}
              onDownloadComplete={handleDownloadComplete} // 👈 nuevo callback estable
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.centerContainer}>
              <Text>Aún no tienes diseños.</Text>
              <Text>¡Crea tu primer diseño con el botón “+”!</Text>
            </View>
          }
          onRefresh={fetchDesigns}
          refreshing={isLoading}
        />
      )}

      {/* Loader Global */}
      <Modal visible={isProcessing || !!downloadingId} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.loaderBox}>
            <ActivityIndicator size="large" color="#2E7D32" />
            <Text style={styles.modalText}>
              {downloadingId ? 'Descargando diseño...' : 'Procesando...'}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  listContent: { padding: 16 },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderBox: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 10,
  },
  modalText: {
    marginTop: 12,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default DashboardScreen;