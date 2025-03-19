import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, ScrollView } from "react-native";

export default function App() {
  const time = "Flamengo";
  const fundacao = "15 de novembro de 1895";
  const estadio = "Maracanã";

  function alerta() {
    alert(`Gol do ${time}!`);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />

      <View>
        <Text style={styles.titulo}>{time}</Text>
        <Text>Fundado em: {fundacao}</Text>
        <Text>Estádio: {estadio}</Text>
      </View>

      <View>
        <Image source={require("./imagens/Jogador1.jpg")} style={styles.imagem} />
        <Image source={require("./imagens/Jogador2.jpg")} style={styles.imagem} />
        <Image source={require("./imagens/Jogador3.jpg")} style={styles.imagem} />
        <Image source={require("./imagens/Jogador4.jpg")} style={styles.imagem} />
        <Image source={require("./imagens/Jogador5.jpg")} style={styles.imagem} />
      </View>

      <Button title="GOL!" onPress={alerta} />
    </ScrollView>
  );
}

