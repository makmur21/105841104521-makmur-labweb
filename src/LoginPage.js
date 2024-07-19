import { StyleSheet,Text,View,TextInput,TouchableOpacity,Image } from "react-native";
import React from "react";
import {useFonts} from "expo-font";
import { useNavigation } from "@react-navigation/native";
import ForgetPasswordPage from "./ForgetPasswordPage";



//Sign Up Screen
const CustomButton =({text,color,onPress})=> {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                width:100,
                height:50,
                backgroundColor:color,
                borderRadius:25,
                marginTop:20,
                justifyContent:"center",
            }}>
                <Text style ={{
                    textAlign:"center",
                    color:"white",
                    fontWeight:"bold",
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

        const CustomTextInput=
        ({placeholder,color,typeKeyboard})=>{
            return (
                <TextInput keyboardType={typeKeyboard} placeholder={placeholder}
                style={{
                    width:"100%",
                    height:40,
                    borderColor:"gray",
                    borderWidth:1,
                    borderRadius:10,
                    marginBottom:20,
                    paddingLeft:18,
                    fontFamily:"MetroMedium",
                }}
              />          
            );
        }

        export default function LoginPage () {
            const [dapatFont] = useFonts ({
                "MetroBold":require ("../assets/fonts/Metropolis-Bold.otf"),
                "MetroMedium":require ("../assets/fonts/Metropolis-Medium.otf"),
            });

            const navigation= useNavigation();
            if (!dapatFont) {
                return <Text>Font tidak di temukan...</Text>
            }

            return (
                <View style={styles.container}>
                     <View style={styles.content}>
                     <Text style={styles.title}>Login
                        </Text>
                     
                    <View style={styles.form}>
                        <CustomTextInput placeholder="Email" keyboardType="email-address"/>
                        <CustomTextInput placeholder="password" keyboardType="default"/>

                        <View style={{flexDirection:"row",justifyContent:"flex-end",marginBottom:10}}>
                            <TouchableOpacity onPress={() => navigation.navigate(ForgetPasswordPage)}>
                                <Text style ={{fontSize:16,textAlign:"center"}}>Forget Password </Text>
                            </TouchableOpacity>
                        </View>
                        <CustomButton text='LOGIN' color="red"/>
                        
                    </View>
                    </View>

                    <Text style ={{fontSize:16, textAlign:"center"}}>Or login with sociial account</Text>
                    <View style ={styles.logoRow}>
                        <View 
                        style={styles.logoContainer}>
                        <Image source={require("./fecebook.png")}
                        style={styles.logo}/>
                        </View>
                        <View style={styles.logoContainer}>
                        <Image source={require("./google.png")}
                        style={styles.logo}/>
                        </View>
                    </View>
                </View>
            )
        }

        const styles = StyleSheet.create ({container:{
            flex:1,
            backgroundColor:"#F0F8FF",
            padding:20,
        },
        content:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        },
        form:{
            width:"100%",
            alignItems:"center",
        },
        logoRow:{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            paddingVertical:20,
        },
        logoContainer:{
            backgroundColor:"white",
            borderRadius:15,
            padding:10,
            marginHorizontal:10,
        },
        logo:{
            width:50,
            height:50,
        },
    });