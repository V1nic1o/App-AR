// src/screens/ManualScreen/components/InstructionCard.js
import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../../screens/ManualScreen/ManualScreen.styles/ManualScreen.styles';

// --- INICIO DE LA MODIFICACIÓN ---
// El componente ahora acepta el número de paso y si es el último
const InstructionCard = ({ title, description, imageSource, stepNumber, isLastStep }) => {
  return (
    // Ya no es 'styles.card', es 'stepContainer'
    <View style={styles.stepContainer}>
      
      {/* Columna Izquierda: Línea de tiempo (Círculo y Línea) */}
      <View style={styles.stepTimeline}>
        <View style={styles.stepCircle}>
          <Text style={styles.stepNumber}>{stepNumber}</Text>
        </View>
        {/* Solo dibuja la línea si NO es el último paso */}
        {!isLastStep && <View style={styles.stepLine} />}
      </View>

      {/* Columna Derecha: Contenido (Imagen y Texto) */}
      <View style={styles.stepContent}>
        <Image source={imageSource} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      
    </View>
  );
  // --- FIN DE LA MODIFICACIÓN ---
};

export default InstructionCard;