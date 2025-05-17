import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import MegaSena from "../components/MegaSena";

export default function MegaSenaScreen() {
  const [jogos, setJogos] = useState([]);

  function gerarJogo() {
    const dezenas = [];
    while (dezenas.length < 6) {
      const n = Math.floor(Math.random() * 60) + 1;
      if (!dezenas.includes(n)) dezenas.push(n);
    }
    dezenas.sort((a, b) => a - b);
    setJogos([dezenas, ...jogos]);
  }

  function resetarJogos() {
    setJogos([]);
  }

  return (
    <View style={{ padding: 20 }}>
      <Card>
        <Card.Title title="Mega Sena" />
        <Card.Content>
          <Button mode="contained" onPress={gerarJogo} style={styles.botao}>
            Gerar Jogo
          </Button>
          <Button mode="outlined" onPress={resetarJogos} style={styles.botao}>
            Limpar Jogos
          </Button>

          <FlatList
            data={jogos}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <MegaSena dezenas={item} />}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginVertical: 8,
  },
});
