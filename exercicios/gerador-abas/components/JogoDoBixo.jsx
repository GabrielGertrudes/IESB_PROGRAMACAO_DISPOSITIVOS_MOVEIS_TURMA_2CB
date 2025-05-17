// components/JogoDoBicho.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function JogoDoBicho({ animal }) {
  if (!animal) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{animal.nome}</Text>
      <Image source={{ uri: animal.imagem }} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 12,
  },
});
