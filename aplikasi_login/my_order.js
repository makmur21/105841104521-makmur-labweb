import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Dummy data for orders
const orders = [
  {
    id: '1',
    orderNumber: '1947034',
    trackingNumber: 'IW3475453455',
    date: '05-12-2019',
    quantity: 3,
    totalAmount: 112,
    status: 'Delivered',
  },
  // Add more orders here
];

const OrderItem = ({ order }) => (
  <View style={styles.orderItem}>
    <Text style={styles.orderNumber}>Order №{order.orderNumber}</Text>
    <Text style={styles.orderDetails}>Tracking number: {order.trackingNumber}</Text>
    <Text style={styles.orderDetails}>Quantity: {order.quantity}</Text>
    <Text style={styles.orderDetails}>Total Amount: {order.totalAmount}$</Text>
    <View style={styles.orderFooter}>
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
      <Text style={styles.orderStatus}>{order.status}</Text>
    </View>
  </View>
);

const DeliveredOrdersScreen = () => (
  <FlatList
    data={orders}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <OrderItem order={item} />}
    contentContainerStyle={styles.listContent}
  />
);

const ProcessingOrdersScreen = () => (
  <View style={styles.centered}>
    <Text>Processing Orders</Text>
  </View>
);

const CancelledOrdersScreen = () => (
  <View style={styles.centered}>
    <Text>Cancelled Orders</Text>
  </View>
);

const TopTab = createMaterialTopTabNavigator();

function MyOrdersTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Delivered" component={DeliveredOrdersScreen} />
      <TopTab.Screen name="Processing" component={ProcessingOrdersScreen} />
      <TopTab.Screen name="Cancelled" component={CancelledOrdersScreen} />
    </TopTab.Navigator>
  );
}

const HomeScreen = () => (
  <View style={styles.centered}>
    <Text>Home Screen</Text>
  </View>
);

const ShopScreen = () => (
  <View style={styles.centered}>
    <Text>Shop Screen</Text>
  </View>
);

const BagScreen = () => (
  <View style={styles.centered}>
    <Text>Bag Screen</Text>
  </View>
);

const FavoritesScreen = () => (
  <View style={styles.centered}>
    <Text>Favorites Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1 }}>
    <MyOrdersTabs />
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="pricetag-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Bag"
          component={BagScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cart-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDetails: {
    fontSize: 14,
    marginTop: 4,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  detailsButton: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 5,
  },
  detailsButtonText: {
    color: '#007BFF',
  },
  orderStatus: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  listContent: {
    padding: 16,
  },
});
