import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StatusBar, Image } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { globalStyles, colors } from '../../theme/globalStyles';

const WelcomeScreen = ({ navigation }) => {
  const { colors: themeColors } = useTheme();

  return (
    <SafeAreaView style={[globalStyles.safeArea, { backgroundColor: themeColors.background }]}>
      <StatusBar barStyle="dark-content" backgroundColor={themeColors.background} />

      <View style={globalStyles.container}>
        {/* 🌿 Imagen superior */}
        <View style={globalStyles.imageContainer}>
          <Image
            source={require('../../assets/garden_welcome.png')}
            style={globalStyles.imageLarge}
            resizeMode="contain"
          />
        </View>

        {/* ✨ Título y subtítulo */}
        <View style={{ alignItems: 'center', marginBottom: 50 }}>
          <Text variant="displayMedium" style={globalStyles.title}>
            Jardín AR
          </Text>
          <Text variant="headlineSmall" style={globalStyles.subtitle}>
            Diseña el jardín de tus sueños en Realidad Aumentada 
          </Text>
        </View>

        {/* 🌼 Botones */}
        <View style={globalStyles.buttonsContainer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Login')}
            style={globalStyles.buttonPrimary}
            labelStyle={globalStyles.buttonLabelPrimary}
          >
            Iniciar Sesión
          </Button>

          <Button
            mode="contained-tonal"
            onPress={() => navigation.navigate('Register')}
            style={globalStyles.buttonSecondary}
            labelStyle={globalStyles.buttonLabelSecondary}
          >
            Registrarse
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;