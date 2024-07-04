// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="ke halaman login" onPress={()=> NavigationContainer.navigate("login")}></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SingupPage" component={HomeScreen} />
        <Stack.Screen name="LoginPage" component={HomeScreen} />
        <Stack.Screen name="ForgetPasswordPage" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;