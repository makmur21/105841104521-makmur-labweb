import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Catalogsatu from "../aplikasi_login/catalogsatu";
import Categorisatu from "../aplikasi_login/categorisatu";
import { productsOnSale, newProducts } from './productdata';

const Shoppage = () => {
  const [isCatalogView, setIsCatalogView] = useState(false);

  const toggleView = () => {
    setIsCatalogView(!isCatalogView);
  };

  const renderProduct = useCallback(({ item }) => (
    <View style={styles.productCard}>
      <Image style={styles.productImage} source={item.image} />
      <View style={styles.productInfo}>
        <Text style={styles.productBrand}>{item.brand}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productOldPrice}>Rp{item.oldPrice}</Text>
        <Text style={styles.productNewPrice}>Rp{item.newPrice}</Text>
        <Text style={styles.productDiscount}>{item.discount} OFF</Text>
      </View>
    </View>
  ), []);

  const renderNewProduct = useCallback(({ item }) => (
    <View style={styles.productCard}>
      <Image style={styles.productImage} source={item.image} />
      <View style={styles.productInfo}>
        <Text style={styles.productBrand}>{item.brand}</Text>
        <Text style={styles.productName}>{item.name}</Text>
      </View>
    </View>
  ), []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Street clothes</Text>
      </View>
      
      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={toggleView} style={styles.toggleButton}>
          <Ionicons name={isCatalogView ? "grid-outline" : "list-outline"} size={24} color="black" />
          <Text>{isCatalogView ? "Lihat Katalog" : "Lihat Kategori" }</Text>
        </TouchableOpacity>
      </View>
      
      {isCatalogView ? <Catalogsatu /> : <Categorisatu />}
      
      {!isCatalogView && (
        <>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sale</Text>
            <FlatList
              horizontal
              data={productsOnSale}
              keyExtractor={item => item.id}
              renderItem={renderProduct}
              initialNumToRender={5}
              maxToRenderPerBatch={5}
              windowSize={10}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>New</Text>
            <FlatList
              horizontal
              data={newProducts}
              keyExtractor={item => item.id}
              renderItem={renderNewProduct}
              initialNumToRender={5}
              maxToRenderPerBatch={5}
              windowSize={10}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  productCard: {
    marginHorizontal: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  productInfo: {
    marginTop: 10,
    alignItems: 'center',
  },
  productBrand: {
    fontSize: 14,
    color: '#888',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productOldPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  productNewPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  productDiscount: {
    fontSize: 12,
    color: '#d32f2f',
  },
});

export default Shoppage;