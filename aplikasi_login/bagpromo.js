import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';

const bagpromo = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Pullover', color: 'Black', size: 'L', price: 51, quantity: 1, image: require('../assets/bag4.png') },
    { id: '2', name: 'T-Shirt', color: 'Gray', size: 'L', price: 30, quantity: 1, image: require('../assets/bagsatu.png') },
  ]);
  
  const [promoCode, setPromoCode] = useState('');
  const [appliedCode, setAppliedCode] = useState(null);
  const [promoCodes, setPromoCodes] = useState([
    { id: '1', description: 'Personal offer', code: 'mypromocode2020', discount: '10%', daysRemaining: 6 },
    { id: '2', description: 'Summer Sale', code: 'summer2020', discount: '15%', daysRemaining: 23 },
    { id: '3', description: 'Personal offer', code: 'mypromocode2020', discount: '22%', daysRemaining: 6 },
  ]);

  const applyPromoCode = (code) => {
    setAppliedCode(code);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>Color: {item.color}  Size: {item.size}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>Qty: {item.quantity}</Text>
        </View>
      </View>
    </View>
  );

  const renderPromoCode = ({ item }) => (
    <View style={styles.promoContainer}>
      <Text style={styles.promoDiscount}>{item.discount}</Text>
      <View style={styles.promoDetails}>
        <Text style={styles.promoDescription}>{item.description}</Text>
        <Text style={styles.promoCode}>{item.code}</Text>
        <Text style={styles.promoExpiry}>{item.daysRemaining} days remaining</Text>
      </View>
      <TouchableOpacity style={styles.applyButton} onPress={() => applyPromoCode(item.code)}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bag</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <View style={styles.promoInputContainer}>
        <TextInput
          style={styles.promoInput}
          placeholder="Enter your promo code"
          value={promoCode}
          onChangeText={setPromoCode}
        />
        <TouchableOpacity style={styles.promoApplyButton} onPress={() => applyPromoCode(promoCode)}>
          <Text style={styles.promoApplyButtonText}>→</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={promoCodes}
        renderItem={renderPromoCode}
        keyExtractor={item => item.id}
        style={styles.promoList}
      />
    </View>
  );
};

export default bagpromo;

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
  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  promoInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  promoInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  promoApplyButton: {
    marginLeft: 8,
    backgroundColor: '#ff0000',
    borderRadius: 4,
    padding: 10,
  },
  promoApplyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  promoList: {
    flex: 1,
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 16,
  },
  promoDiscount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
    marginRight: 16,
  },
  promoDetails: {
    flex: 1,
  },
  promoDescription: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  promoCode: {
    fontSize: 14,
    color: '#666',
  },
  promoExpiry: {
    fontSize: 12,
    color: '#999',
  },
  applyButton: {
    backgroundColor: '#ff0000',
    borderRadius: 4,
    padding: 10,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});