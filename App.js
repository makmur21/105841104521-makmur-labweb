import { StyleSheet,Text,View,TextInput } from "react-native";
import React from "react"


const ButtonConstum = ({Text,Colom})=>{
  return (
    <View style={{
      flex :1,
      backgroundColor:"red",
      width:250,
      height:100,
      borderRadius:"10",
      justifyContent:"center",
      marginBottom:10,
    }}>
    <Text style={{
      textAlign:"center",
      color:"white",
      fontSize:30,
      fontWeight:"bold",
    }}>

    {Text}
  </Text>
</View>
    )
 }
const TextInputCostum =({ placeholder,color,typekeyboard}) => {
    return (
      <TextInput 
        placeholder="Masukkan No Hp"
        keyboardType={typekeyboard}
        style ={{
          width:250,
          height:50,
          borderColor:"gray",
          borderWidth:1,
          borderRadius:10,
          marginBottom:10,
          paddingLeft:10,
        }}/>
    )
  }
  const App = () => {
    return (
  <View style={{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }}>
    {/* <View
    TextInputCostum
    keyboardType="default"
    placeholder="Nama Lengkap"
    color="green"
    />

    <View
    TextInputCostum
    keyboardType="numeric"
    placeholder="umur"
    color="green"
    />

    <View
    TextInputCostum
    keyboardType="email-addreas"
    placeholder="Email"
    color="green"
    />

    <View
    TextInputCostum
    keyboardType="default"
    placeholder="password"
    color="green"
    /> */}
   <TextInputCostum placeholder="Masukkan Nama" color ="blue" />
    // <TextInputCostum placeholder="Masukkan No Hp" color="red" typekeyboard="numeric" />
    </View>
    );
}
  export default App

 
      