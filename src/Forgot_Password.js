import { StyleSheet,Text,View,TextInput,TouchableOpacity,Image } from "react-native";
import React from "react";

//Login
const Forgot_Password =()=> {
    return (
        <View style = {styles.container}>
            <Text style ={[styles.title,{fontFamily:"Metro-Bold"}]}>Forgot_Password </Text>
            <Text style = {[styles.signlnText,{fontFamily:"Metro-Medium"}]}>
            Please, enter your email address.You Will receive a link to create a new Password via email. </Text>
            <TextInput style ={styles.input} placeholder="Email" keyboardType="email-address"/>
            <TouchableOpacity style= {styles.button}>
                <Text style = {styles.buttonText}>SEND</Text>
                </TouchableOpacity>
        </View>
    );
};

export const styles= StyleSheet.create({
    container: {
        flex : 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        padding:20,
    },
    header:{
        fontSize:24,
        fontWeight: "bold",
        marginBottom:20,
    },
    input :{
        width:"80%",
        height:40,
        borderColor:"#acc",
        borderWidth:1,
        marginBottom:10,
        paddingLeft:10,
        borderRadius:5,
    },
    button:{
        width:"100%",
        height:40,
        backgroundColor:"#FF3D00",
        justifyContent: "center",
        alignItems:"center",
        borderRadius:10,
        marginTop:10,
    },
    buttonText:{
        color :"#fff",
        fontSize:20,
    },
});

export default Forgot_Password