import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Serie({ nome, ano, diretor, temporadas, capa }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: capa }} style={styles.image} />
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.text}>Ano: {ano}</Text>
      <Text style={styles.text}>Diretor: {diretor}</Text>
      <Text style={styles.text}>Temporadas: {temporadas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5
  },
  text: {
    fontSize: 14
  }
});
