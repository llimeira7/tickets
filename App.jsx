import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const tickets = [
  { id: '1', nome: 'Show da Banda X', local: 'Estádio Central', data: '10/05/2025' },
  { id: '2', nome: 'Peça de Teatro Y', local: 'Teatro Municipal', data: '15/05/2025' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tickets Disponíveis</Text>
      <FlatList
        data={tickets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.ticket}>
            <Text style={styles.ticketTitle}>{item.nome}</Text>
            <Text>{item.local}</Text>
            <Text>{item.data}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  ticket: { marginBottom: 15, padding: 10, backgroundColor: '#eee', borderRadius: 8 },
  ticketTitle: { fontSize: 18, fontWeight: 'bold' },
});