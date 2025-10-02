import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Text variant="displayMedium" style={styles.title}>
            ¡Hola Mundo! 👋
          </Text>
          
          <Text variant="bodyLarge" style={styles.subtitle}>
            React Native CLI + Navigation + Paper
          </Text>

          <Button 
            mode="contained" 
            icon="check-circle"
            style={styles.button}
            onPress={() => alert('¡Funciona perfectamente!')}
          >
            Presionar aquí
          </Button>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    elevation: 4,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    marginTop: 16,
  },
});