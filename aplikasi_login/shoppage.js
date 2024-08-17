import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// Example product data for rendering the products (replace with your actual data)
const productsOnSale = [
    { id: '1', brand: 'Dorothy Perkins', name: 'Evening Dress', oldPrice: '150', newPrice: '125', discount: '-20%', image: require('../assets/potoshop1.png') },
    { id: '2', brand: 'Sity', name: 'Sport Dress', oldPrice: '225', newPrice: '195', discount: '-15%', image: require('../assets/potoshop2.png') },
    { id: '3', brand: 'Dorothy Perkins', name: 'Evening Dress', oldPrice: '150', newPrice: '125', discount: '-20%', image: require('../assets/potoshop3.png') },
    { id: '4', brand: 'Sity', name: 'Sport Dress', oldPrice: '225', newPrice: '195', discount: '-15%', image: require('../assets/potoshop4.png') },
    { id: '5', brand: 'Dorothy Perkins', name: 'Evening Dress', oldPrice: '150', newPrice: '125', discount: '-20%', image: require('../assets/potoshop5.png') },
    { id: '6', brand: 'Sity', name: 'Sport Dress', oldPrice: '225', newPrice: '195', discount: '-15%', image: require('../assets/potoshop6.png') },
];

const newProducts = [
    { id: '7', brand: 'New Brand', name: 'New Arrival Dress', image: require('../assets/potoshop7.png') },
    { id: '8', brand: 'Another Brand', name: 'Summer Dress', image: require('../assets/potoshop8.png') },
    { id: '9', brand: 'New Brand', name: 'New Arrival Dress', image: require('../assets/poto2drap.png') },
    { id: '10', brand: 'Another Brand', name: 'Summer Dress', image: require('../assets/poto3drap.png') },
    { id: '11', brand: 'New Brand', name: 'New Arrival Dress', image: require('../assets/poto4drap.png') },
    { id: '12', brand: 'Another Brand', name: 'Summer Dress', image: require('../assets/potoshop8.png') },
];

const Shoppage = () => {
  const navigation = useNavigation(); // Initialize navigation

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
      <Image style={styles.productImage} source={item.image} />
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productBrand}>{item.brand}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>${item.oldPrice}</Text>
        <Text style={styles.newPrice}>${item.newPrice}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="orange" />
        <Ionicons name="star" size={16} color="orange" />
        <Ionicons name="star" size={16} color="orange" />
        <Ionicons name="star" size={16} color="orange" />
        <Ionicons name="star-half" size={16} color="orange" />
        <Text style={styles.reviewCount}>(10)</Text>
      </View>
    </View>
  );

  const renderNewProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image style={styles.productImage} source={item.image} />
      <Text style={styles.productTitle}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("categorisatu")}>
  <Image source={require("../assets/icon2.jpg")} style={styles.backIcon} />
</TouchableOpacity>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../assets/gambardrap.png')} style={styles.headerImage} />
          <TouchableOpacity onPress={() => navigation.navigate("categorisatu")}>
            <Text style={styles.headerText}>Street clothes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sale</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            data={productsOnSale}
            keyExtractor={item => item.id}
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            data={newProducts}
            keyExtractor={item => item.id}
            renderItem={renderNewProduct}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      <View style={styles.navigationBar}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: 'relative',
    height: 200,
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerText: {
    fontSize: 28,
    fontFamily: "MetroBold",
    color: "white",
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: "MetroBold",
  },
  viewAllText: {
    fontSize: 16,
    color: 'gray',
  },
  productCard: {
    width: 150,
    marginHorizontal: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  productInfo: {
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 16,
    fontFamily: "MetroMedium",
    marginBottom: 5,
  },
  productBrand: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  oldPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  newPrice: {
    fontSize: 18,
    fontFamily: "MetroBold",
    color: "red",
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  navigationBar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navIcon: {
    width: 28,
    height: 28,
  },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
    },
    backIcon: {
      width: 30,
      height: 30,
    },
    
});

export default Shoppage;
