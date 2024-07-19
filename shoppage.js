import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const shoppage = () => {
  return (
    <View>
      <Text>HALAMAN SHOP</Text>
    </View>
  )
}

export default shoppage

const styles = StyleSheet.create({})






















































































































// import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
// import React from 'react'

// const shoppage = () => {
//   return (
//     <View style ={styles.container}>
//     <View style ={styles.header}>
//       <Text style= {styles.headerText}>Categories</Text>
//     </View>
//     <View style= {styles.tabBar}>
//         <TouchableOpacity style= {styles.tabItem}>
//             <Text style = {styles.tabTextActive}>Women</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style= {styles.tabItem}>
//                 <Text style= {styles.tabText}>Men</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style= {styles.tabItem}>
//                 <Text style = {styles.tabText}>Kids</Text>
//             </TouchableOpacity>
//             </View>
//             <ScrollView style= {styles.ScrollView}>
//                 <TouchableOpacity style= {styles.card}>
//                     <View style= {styles.cardImageContainer}>
//                         <Image source ={{uri: 'https://via.placeholder.com/150'}} style={styles.cardImage}/>
//                     </View>
//                     <View style= {styles.cardContent}>
//                         <Text style= {styles.cardTitle}>SUMMER SALES</Text>
//                         <Text style= {styles.cardSubtitle}>Up to 50%</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style= {styles.card}>
//                     <Image source={{}} style={styles.cardImage}/>
//                     <text style={styles.cardTitle}>New</text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style= {styles.card}>
//                     <Image source={{}} style={styles.cardImage}/>
//                     <text style={styles.cardTitle}>Clothes</text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style= {styles.card}>
//                     <Image source={{}} style={styles.cardImage}/>
//                     <text style={styles.cardTitle}>Shoes</text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style= {styles.card}>
//                     <Image source={{}} style={styles.cardImage}/>
//                     <text style={styles.cardTitle}>Accessories</text>
//                 </TouchableOpacity>
//             </ScrollView>
//     </View>
//   );
// }

// export default shoppage

// const styles = StyleSheet.create({
//     containe: {
//         flex:1,
//         backgroundColor:"#fff",
//     },
//     header:{
//         paddingTop:40,
//         paddingBottom:10,
//         backgroundColor:"#f8f8f8",
//         alignItems:"center",
//     },
//     headerText:{
//         fontSize:18,
//         fontWeight:"bold",
//     },
//     tabBar: {
//         flexDirection:"row",
//         justifyContent:"space-around",
//         backgroundColor:"#fff",
//         borderBottomWidth:1,
//         borderBottomColor:"#ddd",
//     },
//     tabItem:{
//         paddingVertical:15,
//     },
//     tabText:{
//         fontSize:16,
//         color:"#888",
//     },
//     tabTextActive:{
//         fontSize:16,
//         color:"#000",
//         borderBottomWidth:2,
//         borderBottomColor:"#000",
//     },
//     ScrollView:{
//         paddingHorizontal:10,
//     },
//     card :{
//         flexDirection:"row",
//         alignItems:"center",
//         padding:10,
//         marginVertical:5,
//         backgroundColor:"#fff",
//         borderRadius:8,
//         shadowColor:"#000",
//         shadowOffset:{width:0, height:2},
//         shadowOpacity:0.1,
//         shadowRadius:8,
//         elevation:3,
//     },
//     cardImageContainer:{
//         marginRight:10,
//     },
//     cardImage:{
//         width100,
//         height:100,
//         borderRadius:8,
//     },
//     cardContent:{
//         flex:1,
//     },
//     cardTitle:{
//         fontSize:18,
//         fontWeight:"bold",
//     },
//     cardSubtitle:{
//         fontSize:14,
//         color:"#888",
//     },
// });