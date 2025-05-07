import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Card, Button, List } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Card>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Title title={receita.nome} subtitle={`Preparo: ${receita.tempoPreparo} | Porções: ${receita.porcoes}`} />
        <Card.Content>
          <Text variant="titleMedium" style={{ marginTop: 10 }}>Ingredientes:</Text>
          {receita.ingredientes.map((item, index) => (
            <List.Item
              key={index}
              title={item}
              left={() => <List.Icon icon="food" />}
            />
          ))}

          <Text variant="titleMedium" style={{ marginTop: 10 }}>Modo de Preparo:</Text>
          {receita.modoPreparo.map((passo, index) => (
            <List.Item
              key={index}
              title={passo}
              left={() => <List.Icon icon="chef-hat" />}
            />
          ))}
        </Card.Content>

        <Card.Actions>
          <Button onPress={() => navigation.goBack()}>Voltar</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
