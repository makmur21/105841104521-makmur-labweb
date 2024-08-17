import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const Productcard = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <AntDesign name="hearto" size={24} color="black" />
      </View>

      <Image
        style={styles.image}
        source={{ uri: './assets/poto17.png' }}
      />

      <View style={styles.details}>
        <Text style={styles.brand}>H&M</Text>
        <Text style={styles.price}>$19.99</Text>

        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={18} color="orange" />
          <MaterialIcons name="star" size={18} color="orange" />
          <MaterialIcons name="star" size={18} color="orange" />
          <MaterialIcons name="star" size={18} color="orange" />
          <MaterialIcons name="star-half" size={18} color="orange" />
          <Text style={styles.ratingText}>(473)</Text>
        </View>

        <Text style={styles.description}>
          Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed hem.
        </Text>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  details: {
    padding: 16,
  },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#333',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#888',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  addToCartButton: {
    backgroundColor: '#FF3E30',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Productcard;
