import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Impor halaman-halaman yang dibutuhkan
import Homepage from './aplikasi_login/Home';
import Bagpage from './aplikasi_login/Bagpage';
import Shoppage from './aplikasi_login/shoppage';
import Profilpage from './aplikasi_login/profilpage';
import Favoritepage from './aplikasi_login/favoritepage';
import ForgetPasswordPage from './src/ForgetPasswordPage';
import SignupPage from './src/SingupPage';
import LoginPage from './src/LoginPage';
import categorisatu from './aplikasi_login/categorisatu';

// Impor ikon-ikon
import HomeAktif from './assets/home_activated.png';
import HomeInaktif from './assets/home_inactive.png';
import BagAktif from './assets/bag_activated.png';
import BagInaktif from './assets/bag_inactive.png';
import FavoritesAktif from './assets/favorites_activated.png';
import FavoritesInaktif from './assets/favorites_inactive.png';
import ProfilAktif from './assets/profil_activated.png';
import ProfilInaktif from './assets/profil_inactive.png';
import ShopAktif from './assets/shop_activated.png';
import ShopInaktif from './assets/shop_inactive.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AuthStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignupPage" component={SignupPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="ForgetPasswordPage" component={ForgetPasswordPage} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? BagAktif : BagInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favoritepage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? FavoritesAktif : FavoritesInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profilpage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfilAktif : ProfilInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shoppage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ShopAktif : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={MyTabs} />
        <Stack.Screen name="shop" component={shoppage} />
        <Stack.Screen name="categorisatu" component={categorisatu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

      {/* <Stack.Screen name="Bag" component={Bagpage} />
        <Stack.Screen name="shop" component={shoppage} />
        <Stack.Screen name="profil" component={profilpage} />
        <Stack.Screen name="favorite" component={favoritepage} /> */}
   