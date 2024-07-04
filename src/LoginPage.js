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























{/* 


                        </View>
                    </View>
                    <Text style={{
                        fontSize: 50,
                        textAlign: 'center',
                        fontFamily: "MetroBold",
                        marginBottom: 16,
                        marginTop: 50,
                    }}>SIGN UP</Text>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                        <TextInputCostom placeholder="Name" color="black" typeKeyboard="default" />
                        <TextInputCustom placeholder="Email" color="black" typeKeyboard="email-address" />
                        <TextInputCustom placeholder="Password" color="black" typeKeyboard="default" />

                        <ButtonCustom text="SIGN UP " color="red" onPress={() => { } } />
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={{
                                fontSize: 16,
                                color: "#555",
                                marginBottom: 16,
                                textAlign: "center",
                                width: '100%',
                            }}>Already have an account? </Text>
                    </TouchableOpacity><View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "50%"
                    }}>
                        <TouchableOpacity style={{
                            width: 50,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: 8,
                        }}>
                            <Image source={require("./google.png")} style={{
                                width: 40,
                                height: 40,
                            }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 50,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: 8,
                        }}>
                            <Image source={require("./fecebook.png")} style={{
                                width: 40,
                                height: 40,
                            }} />
                        </TouchableOpacity>
                    </View>
            </View>
        </Text>
    )
}

export default SignupPage





 */}
































































































































































































// import { StyleSheet,Text,View,TextInput,TouchableOpacity,Image } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native";


// //Login
// const LoginPage =()=> {
//     const navigation = useNavigation();
//     return (
//         <View style = {styles.container}>
//            <Text style ={[styles.title,{fontFamily:"Metro-Bold"}]}>LoginPage </Text>

//            {/* navigasi ke halaman forgetpasswordpage */}
//            <TouchableOpacity  onPress={()=> navigation.navigate("ForgetPassword")}>
//            </TouchableOpacity>
//             <TextInput style ={styles.input} placeholder="Email" keyboardType="email-address"/>
//             <TextInput style ={styles.input} placeholder="Password" secureTextEntry={true}/>
//             <Text style = {[styles.signlnText,{fontFamily:"Metro-Medium"}]}>
//             Already have an account? </Text>
//             <TouchableOpacity style= {styles.button}>
//                 <Text style = {styles.buttonText}>LoginPage </Text>
              
//               {/* naviigasi ke hhalaman singup */}
//             </TouchableOpacity>
//             <TouchableOpacity  onPress={()=> navigation.navigate("Singup")}>
//             <Text style = {styles.buttonText}>singup </Text>
//             <Text style ={styles.linkText}>Or sign up with social account </Text>
//             </TouchableOpacity>
//             <TouchableOpacity  onPress={()=> navigation.navigate("Singup")}>
//             <Text style = {styles.buttonText}>ForgetPassword </Text>
//             </TouchableOpacity>
//             <View style= { styles.socialLogin}>
//                 <View style = { styles.socialLogin}>
//                 <View style = { styles.socialColom}>
//                 <TouchableOpacity style ={styles.socialButton}>
//                     <Image source={require("./google.png")} style ={styles.socialIcon} />
//                 </TouchableOpacity>
//                 </View>
//                 <View style = { styles.socialColomSatu}>
//                 <TouchableOpacity style = { styles.socialButton }>
//                     <Image source= {require("./fecebook.png")} style ={styles.socialIcon} />
//                 </TouchableOpacity>
//             </View>
//             </View>
//         </View>
//         </View>
//     );
// }



// export const styles= StyleSheet.create({
//     container: {
//         flex : 1,
//         justifyContent:"center",
//         alignItems:"center",
//         backgroundColor:"#fff",
//         padding:20,
//     },
//     header:{
//         fontSize:24,
//         fontWeight: "bold",
//         marginBottom:20,
//     },
//     input :{
//         width:"80%",
//         height:40,
//         borderColor:"#acc",
//         borderWidth:1,
//         marginBottom:10,
//         paddingLeft:10,
//         borderRadius:5,
//     },
//     button:{
//         width:"100%",
//         height:40,
//         backgroundColor:"#FF3D00",
//         justifyContent: "center",
//         alignItems:"center",
//         borderRadius:10,
//         marginTop:10,
//     },
//     buttonText:{
//         color :"#fff",
//         fontSize:20,
//     },
//     linkText:{
//         color: "#007BFF",
//         marginTop:20,
//     },
//     socialLogin: {
//         flexDirection:"row",
//         marginTop:20,
//         justifyContent:"center"
//     },
//     socialColom: {
//         alignItems:"center",
//         backgroundColor:"#3b5998",
//         marginHorizontal:15,
//         padding:10,
//         borderRadius:15,
//     },
//     socialColomSatu: {
//         alignItems:"center",
//         backgroundColor:"green",
//         marginHorizontal:15,
//         padding:10,
//         borderRadius:15,
//     },
//     socialButton:{
//         width:50,
//         height:50,
//         justifyContent:"center",
//         alignItems:"center",
//         marginHorizontal:5,
//     },
//     socialIcon :{
//         width:30,
//         height:30,
//     },
// });

// export default LoginPage