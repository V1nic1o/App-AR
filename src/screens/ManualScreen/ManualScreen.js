// src/screens/ManualScreen/ManualScreen.js
import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

// 1. Importa los nuevos componentes y datos
import { styles } from './ManualScreen.styles/ManualScreen.styles';
import { manualInstructions } from './manualData';
import InstructionCard from '../../components/InstructionCard/InstructionCard';

const ManualScreen = () => {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContainer}
    >
      <Text style={styles.headerTitle}>Guía Rápida de AR</Text>

      {/* 2. Mapea los datos y crea las tarjetas dinámicamente */}
      
      {/* --- INICIO DE LA MODIFICACIÓN --- */}
      {/* Ahora pasamos el 'index' para saber el número de paso */}
      {manualInstructions.map((instruction, index) => (
        <InstructionCard
          key={instruction.title}
          // Pasamos el número de paso (index empieza en 0, así que +1)
          stepNumber={index + 1}
          // Pasamos si es el último item para no dibujar la línea
          isLastStep={index === manualInstructions.length - 1}
          // Quitamos el "1. " del título original, ya que ahora tenemos el círculo
          title={instruction.title.substring(3)} 
          description={instruction.description}
          imageSource={instruction.imageSource} 
        />
      ))}
      {/* --- FIN DE LA MODIFICACIÓN --- */}

    </ScrollView>
  );
};

export default ManualScreen;