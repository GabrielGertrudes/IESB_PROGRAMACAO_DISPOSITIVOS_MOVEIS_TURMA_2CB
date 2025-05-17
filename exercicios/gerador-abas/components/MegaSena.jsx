// components/MegaSena.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MegaSena({ dezenas }) {
  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        {dezenas.map((num, index) => (
          <View key={index} style={styles.bola}>
            <Text style={styles.texto}>{num}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 320,
    flexWrap: "nowrap",
  },
  bola: {
    backgroundColor: "#2e7d32",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  texto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
