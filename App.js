// In App.js in a new project

import * as React from 'react';
import { View,Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingupPage from './src/SingupPage';
import LoginPage from './src/LoginPage';
import ForgetPasswordPage from './src/ForgetPasswordPage';


function HomeScreen ({navigation}) {
    return(
        <View style ={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>HomeScreen</Text>
            <Button title=" ke halaman SingupPage "onPress={() =>navigation.navigate ("SingupPage")}/>
            <Button title=" ke halaman LoginPage "onPress={() =>navigation.navigate ("LoginPage")}/>
            <Button title=" ke halaman ForgetPasswordPage "onPress={() =>navigation.navigate ("ForgetPasswordPage")}/>

                </View>
    );
}

const Stack =
createNativeStackNavigator();
function App (){
    return (
    <NavigationContainer>
        <Stack.Navigator>
            {/*<Stack.Screen name ="Home" component={HomeScreen}/>*/}
            <Stack.Screen name ="SingupPage" component={SingupPage} options ={{headerShown:false}}/>
            <Stack.Screen name ="LoginPage" component={LoginPage} options ={{headerShown:false}}/>
            <Stack.Screen name ="ForgetPasswordPage" component={ForgetPasswordPage} options ={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App

