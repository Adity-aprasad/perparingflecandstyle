import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  const data = [
    { id: '1', body: 'Kuch' },
    { id: '2', body: 'Bhi' },
    { id: '3', body: 'Hai' },
    { id: '4', body: 'Issme' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.text}>{item.body}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      horizontal={true}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    width: 140,
    height: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  separator: {
    width: 15, // Space between cards
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
});
