import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native';

const BagPromo = () => {
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
    <View style={styles.promoSection}>
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

const BagPage = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Pullover', color: 'Black', size: 'L', price: 51, quantity: 1, image: require('../assets/bagsatu.png') },
    { id: '2', name: 'T-Shirt', color: 'Gray', size: 'L', price: 30, quantity: 1, image: require('../assets/bagdua.png') },
    { id: '3', name: 'Sport Dress', color: 'Black', size: 'M', price: 43, quantity: 1, image: require('../assets/bagtiga.png') },
  ]);
  const [showPromo, setShowPromo] = useState(false);

  const incrementQuantity = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>Color: {item.color}  Size: {item.size}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>My Bag</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <TouchableOpacity style={styles.promoButton} onPress={() => setShowPromo(!showPromo)}>
        <Text style={styles.promoButtonText}>{showPromo ? 'Hide Promo Codes' : 'Show Promo Codes'}</Text>
      </TouchableOpacity>
      {showPromo && <BagPromo />}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total amount: ${totalAmount}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BagPage;

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
  quantityButton: {
    fontSize: 18,
    width: 32,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 4,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  totalContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    width: '100%',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  promoButton: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#ff0000',
    borderRadius: 8,
    marginVertical: 16,
  },
  promoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  promoSection: {
    marginBottom: 16,
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