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
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.titulo}>{time}</Text>
        <Text style={styles.info}>Fundado em: {fundacao}</Text>
        <Text style={styles.info}>Estádio: {estadio}</Text>
      </View>

      <View style={styles.imagensContainer}>
        <Image source={require("./imagens/Jogador1.jpg")} style={styles.imagem} />
        <Image source={require("./imagens/Jogador2.jpg")} style={styles.imagem} />
        <Image source={require("./imagens/Jogador3.jpg")} style={styles.imagem} />
        <Image source={require("./imagens/Jogador4.jpg")} style={styles.imagem} />
        <Image source={require("./imagens/Jogador5.jpg")} style={styles.imagem} />
      </View>
      <View style={styles.botaoContainer}>
        <Button title="GOL!" onPress={alerta} color="#d32f2f" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#1c1c1c", 
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#d32f2f", 
    textTransform: "uppercase",
  },
  info: {
    fontSize: 18,
    color: "#ffffff",
    marginTop: 5,
  },
  imagensContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imagem: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 10,
  },
  botaoContainer: {
    marginTop: 20,
    width: "80%",
  },
});
