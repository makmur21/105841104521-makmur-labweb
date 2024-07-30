import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const categories = ['T-shirts', 'Crop tops', 'Sleeveless'];
const products = [
  { id: '1', name: 'Pullover', brand: 'Mango', price: 51, rating: 4, reviews: 3, image: require('../assets/potoshop5.png') },
  { id: '2', name: 'Blouse', brand: 'Dorothy Perkins', price: 34, rating: 0, reviews: 0, image: require('../assets/potoshop6.png') },
  { id: '3', name: 'T-shirt', brand: 'LOST ink', price: 12, rating: 5, reviews: 10, image: require('../assets/potoshop7.png') },
  { id: '4', name: 'Shirt', brand: 'Topshop', price: 51, rating: 4, reviews: 3, image: require('../assets/potoshop8.png') }
];

const Catalogsatu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>Women’s tops</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>

      <ScrollView horizontal style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
        <FontAwesome name="sliders" size={24} color="black" style={styles.filterIcon} />
      </ScrollView>

      <View style={styles.sortFilterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortText}>Price: lowest to high</Text>
        </TouchableOpacity>
        <FontAwesome name="th-large" size={24} color="black" />
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image style={styles.productImage} source={item.image} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productBrand}>{item.brand}</Text>
              <View style={styles.productRating}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome key={i} name="star" size={12} color={i < item.rating ? 'orange' : 'gray'} />
                ))}
                <Text style={styles.productReviews}>({item.reviews})</Text>
              </View>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
            <FontAwesome name="heart-o" size={24} color="black" style={styles.heartIcon} />
          </View>
        )}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  categoryButton: {
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  filterIcon: {
    marginLeft: 10,
  },
  sortFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    borderRadius: 5,
  },
  filterText: {
    fontSize: 14,
  },
  sortButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    borderRadius: 5,
  },
  sortText: {
    fontSize: 14,
  },
  productCard: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productBrand: {
    fontSize: 14,
    color: '#888',
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productReviews: {
    fontSize: 12,
    color: '#888',
    marginLeft: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  heartIcon: {
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 12,
  },
});

export default Catalogsatu;