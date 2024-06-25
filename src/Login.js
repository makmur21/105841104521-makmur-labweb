import { StyleSheet,Text,View,TextInput,TouchableOpacity,Image } from "react-native";
import React from "react";

//Login
const Login =()=> {
    return (
        <View style = {styles.container}>
            <Text style ={styles.header}>Login </Text>
            <TextInput style ={styles.input} placeholder="Email" keyboardType="email-address"/>
            <TextInput style ={styles.input} placeholder="Password" secureTextEntry={true}/>
            <Text style = {styles.linkText}> Already have an account? </Text>
            <TouchableOpacity style= {styles.button}>
                <Text style = {styles.buttonText}>Login </Text>
              
            </TouchableOpacity>
            <Text style = {styles.linkText}> Or sign up with social account </Text>
            <View style= { styles.socialLogin}>
                <View style = { styles.socialLogin}>
                <View style = { styles.socialColom}>
                <TouchableOpacity style ={styles.socialButton}>
                    <Image source={require("./google.png")} style ={styles.socialIcon} />
                </TouchableOpacity>
                </View>
                <View style = { styles.socialColomSatu}>
                <TouchableOpacity style = { styles.socialButton }>
                    <Image source= {require("./fecebook.png")} style ={styles.socialIcon} />
                </TouchableOpacity>
            </View>
            </View>
        </View>
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
    linkText:{
        color: "#007BFF",
        marginTop:20,
    },
    socialLogin: {
        flexDirection:"row",
        marginTop:20,
        justifyContent:"center"
    },
    socialColom: {
        alignItems:"center",
        backgroundColor:"#3b5998",
        marginHorizontal:15,
        padding:10,
        borderRadius:15,
    },
    socialColomSatu: {
        alignItems:"center",
        backgroundColor:"green",
        marginHorizontal:15,
        padding:10,
        borderRadius:15,
    },
    socialButton:{
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:5,
    },
    socialIcon :{
        width:30,
        height:30,
    },
});

export default Login