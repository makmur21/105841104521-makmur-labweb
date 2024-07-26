import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/LoginPage';
import Bagpage from './Bagpage';
import shoppage from './shoppage';
import profilpage from './profilpage';
import favoritepage from './favoritepage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/home_activated.png';
import HomeInaktif from './assets/home_inactive.png';
import BagAktif from './assets/bag_activated.png';
import baginaktif from './assets/bag_inactive.png';
import favoritesAktif from './assets/favorites_activated.png';
import favoritesinaktif from './assets/favorites_inactive.png';
import profilAktif from './assets/profil_activated.png';
import profilinaktif from './assets/profil_inactive.png';
import shopAktif from './assets/shop_activated.png';
import shopinaktif from './assets/shop_inactive.png';
import tes from "./code/tes";
import LoginSimak from './code/LoginSimak';
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-status-bar";

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bagpage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? BagAktif : baginaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={favoritepage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? favoritesAktif : favoritesinaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profil"
        component={profilpage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? profilAktif : profilinaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="shop"
        component={shoppage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? shopAktif : shopinaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Bag" component={Bagpage} />
        <Stack.Screen name="shop" component={shoppage} />
        <Stack.Screen name="profil" component={profilpage} />
        <Stack.Screen name="favorite" component={favoritepage} />
      </Stack.Navigator>
    </NavigationContainer>


   
  );
}

export default App;