import { StyleSheet,Text,View } from "react-native";
import React from "react"

const App = () => {
  return (
    <View style = {{
      flex:1
    }}>
      <View style={{
      justifyContent: "flex-start",//baris
      alignItems:"flex-start",//kolom
    }}>
    <View style={{
      width:100,
      height:100,
      backgroundColor:"red",
    }}>
    </View>
    </View>
    <View style = {{
      flex:1,
      justifyContent: "flex-end",//baris
      alignItems:"flex-end",//kolom
    }}>
    <View style={{
      width:100,
      height:100,
      backgroundColor:"blue",
    }}>
    </View>
    </View>
    </View>
  )

 }
  export default App
      