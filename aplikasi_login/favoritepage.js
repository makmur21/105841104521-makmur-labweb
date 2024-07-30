import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const FavoritePage = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Shirt', brand: 'LIME', color: 'Blue', price: 32, isNew: false, isSoldOut: false, image: require('../assets/faforit1.png'), rating: 4 },
    { id: '2', name: 'Longsleeve', brand: 'Mango', color: 'Orange', price: 46, isNew: true, isSoldOut: false, image: require('../assets/faforit2.png'), rating: 5 },
    { id: '3', name: 'Shirt', brand: 'Oliver', color: 'Gray', price: 52, isNew: false, isSoldOut: true, image: require('../assets/faforit3.png'), rating: 3 },
    { id: '4', name: 'T-Shirt', brand: '6&berries', color: 'Black', price: 50, isNew: false, isSoldOut: false, image: require('../assets/faforit4.png'), rating: 4, discount: 30 },
    { id: '5', name: 'Shirt', brand: 'LIME', color: 'Blue', price: 32, isNew: false, isSoldOut: false, image: require('../assets/faforit5.png'), rating: 4 },
    { id: '6', name: 'Longsleeve', brand: 'Mango', color: 'Orange', price: 46, isNew: true, isSoldOut: false, image: require('../assets/faforit6.png'), rating: 5 },
    { id: '6', name: 'Longsleeve', brand: 'Mango', color: 'Orange', price: 46, isNew: true, isSoldOut: false, image: require('../assets/faforit7.png'), rating: 5 },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemBrand}>{item.brand}</Text>
          {item.isNew && <Text style={styles.newTag}>NEW</Text>}
        </View>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>Color: {item.color}</Text>
        <View style={styles.priceContainer}>
          {item.discount && <Text style={styles.discountTag}>-{item.discount}%</Text>}
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
        <Text style={styles.itemRating}>Rating: {item.rating}⭐</Text>
        {item.isSoldOut && <Text style={styles.soldOut}>Sorry, this item is currently sold out</Text>}
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}><Text>Summer</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>T-Shirts</Text></TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}><Text>Filters</Text></TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}><Text>Price: lower to higher</Text></TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

export default FavoritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
  },
  sortButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
    position: 'relative',
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemBrand: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newTag: {
    backgroundColor: '#ff0',
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountTag: {
    color: 'red',
    fontWeight: 'bold',
    marginRight: 8,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  itemRating: {
    fontSize: 14,
    color: '#666',
  },
  soldOut: {
    color: 'red',
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ff0000',
    borderRadius: 16,
    padding: 4,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});