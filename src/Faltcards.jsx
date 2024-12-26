import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Faltcards = () => {
  const data = [
    { id: '1', body: 'Red', image: 'https://via.placeholder.com/150/FF0000' },
    { id: '2', body: 'Blue', image: 'https://via.placeholder.com/150/0000FF' },
    { id: '3', body: 'Green', image: 'https://via.placeholder.com/150/008000' },
    { id: '4', body: 'Purple', image: 'https://via.placeholder.com/150/800080' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.body}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={true}
      contentContainerStyle={styles.list}
    />
  );
};

export default Faltcards;

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    marginHorizontal: 8,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
    width: 140,
    height: 180,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
});
