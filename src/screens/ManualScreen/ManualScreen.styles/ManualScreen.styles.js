// src/screens/ManualScreen/ManualScreen.styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // --- ESTILOS GENERALES (SIN CAMBIOS) ---
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Fondo suave
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40, 
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },

  // --- INICIO DEL REDISEÑO ---
  // Estos estilos reemplazan todo lo relacionado con 'card'

  stepContainer: {
    flexDirection: 'row', // Alinea la línea de tiempo a la izq. y el contenido a la der.
    marginBottom: 24,
  },
  
  // --- Columna Izquierda: La Línea de Tiempo ---
  stepTimeline: {
    width: 40, // Ancho fijo para alinear los círculos
    alignItems: 'center',
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2E7D32', // Color primario de tu app
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  stepNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepLine: {
    flex: 1, // Ocupa el espacio restante
    width: 2,
    backgroundColor: '#D8D8D8', // Una línea gris suave
    marginTop: 8,
  },

  // --- Columna Derecha: El Contenido ---
  stepContent: {
    flex: 1, // Ocupa el resto del ancho
    marginLeft: 16,
  },

  // --- INICIO DE LA MODIFICACIÓN ---
  cardImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
    resizeMode: 'contain',
    backgroundColor: 'transparent', // Fondo transparente
    borderWidth: 0, // Sin borde
  },
  // --- FIN DE LA MODIFICACIÓN ---

  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  // --- FIN DEL REDISEÑO ---
});