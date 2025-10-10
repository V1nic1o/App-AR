// src/screens/DashboardScreen/components/DesignCard.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Platform,
  ActivityIndicator
} from 'react-native';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-blob-util';
import FileViewer from 'react-native-file-viewer';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DesignCard = ({ item, downloadingId, setDownloadingId, onDelete }) => {
  const handleDownload = async (designId, designName) => {
    setDownloadingId(designId);

    try {
      const token = await AsyncStorage.getItem('userToken');
      const pdfUrl = `${API_URL}/designs/${designId}/pdf`;
      const sanitizedName = designName.replace(/[^a-zA-Z0-9]/g, '_');

      const { config, fs } = RNFS;
      const downloadDir = Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
      const filePath = `${downloadDir}/${sanitizedName}.pdf`;

      const options = {
        fileCache: true,
        path: filePath,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: filePath,
          description: 'Descargando PDF de diseño.',
        },
      };

      const res = await config(options).fetch('GET', pdfUrl, {
        Authorization: `Bearer ${token}`,
      });

      console.log('El archivo se ha descargado en:', res.path());

      // 👇 Solución estable: esperar un pequeño delay antes de abrir el visor
      setTimeout(() => {
        FileViewer.open(res.path(), { showOpenWithDialog: true })
          .then(() => {
            console.log('PDF abierto correctamente');
          })
          .catch((error) => {
            console.error('Error al abrir el PDF:', error);
            Alert.alert('Error', 'No se pudo abrir el archivo PDF.');
          });
      }, 500);
    } catch (err) {
      console.error('Error al descargar o abrir el PDF:', err);
      Alert.alert('Error', 'No se pudo descargar o abrir el archivo PDF.');
    } finally {
      // 👇 Se libera el loader ANTES de abrir el PDF
      setDownloadingId(null);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardShadow}>
        <ImageBackground
          source={{ uri: item.screenshot_url }}
          style={styles.image}
          imageStyle={styles.imageBorder}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.5)', 'transparent']}
            style={styles.gradient}
          />
          <View style={styles.cardHeader}>
            <Text numberOfLines={1} style={styles.title}>
              {item.name}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onDelete(item.id)}
            >
              <MaterialCommunityIcons name="delete-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.downloadButton, downloadingId === item.id && styles.downloading]}
            onPress={() => handleDownload(item.id, item.name)}
            disabled={downloadingId !== null}
          >
            {downloadingId === item.id ? (
              <>
                <ActivityIndicator color="#fff" size="small" />
                <Text style={styles.buttonText}>  Descargando...</Text>
              </>
            ) : (
              <>
                <MaterialCommunityIcons name="file-pdf-box" size={22} color="#fff" />
                <Text style={styles.buttonText}>  Descargar PDF</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  cardShadow: {
    borderRadius: 18,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    height: 180,
    justifyContent: 'flex-end',
  },
  imageBorder: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'rgba(245, 10, 10, 0.89)',
    padding: 10,
    borderRadius: 20,
  },
  actions: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  downloadButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
  },
  downloading: {
    backgroundColor: '#2E7D32',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DesignCard;