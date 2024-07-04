import { StyleSheet,Text,View,TextInput,TouchableOpacity,Image } from "react-native";
import React from "react";
import {useFonts} from "expo-font";




//Sign Up Screen
const ButtonCustom =({text,color,onPress})=> {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                width:320,
                height:50,
                backgroundColor:color,
                borderRadius:50,
                marginBottom:40,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text style ={{
                    textAlign:"center",
                    color:"while",
                    fontWeight:"bold",
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

        const TextInputCustom=
        ({placeholder,color,typeKeyboard})=>{
            return (
                <TextInput keyboardType={typeKeyboard} placeholder={placeholder}
                style={{
                    width:250,
                    height:40,
                    borderColor:"color",
                    borderWidth:1,
                    borderRadius:5,
                    marginBottom:20,
                    paddingLeft:10,
                    fontFamily:"MetroMedium",
                }}
              />          
            );
        }

        const SignupPage =({navigation})=>{
            const [dapatFont] = useFonts ({
                "MetroBold":require ("../assets/fonts/Metropolis-Bold.otf"),
                "MetroMedium":require ("../assets/fonts/Metropolis-Medium.otf"),
            });
            if (!dapatFont) {
                return <Text>Font tidak di temukan...</Text>
            }

            return (
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                }}>
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
                        <TextInputCustom placeholder="Name" color="black" typeKeyboard="default" />
                        <TextInputCustom placeholder="Email" color="black" typeKeyboard="email-address" />
                        <TextInputCustom placeholder="Password" color="black" typeKeyboard="default" />

                        <ButtonCustom text="SIGN UP " color="red" onPress={() => { } } />
                        <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
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
        </View>
    )
}

export default SignupPage





































































//         <View style = {styles.container}>
//             <Text style ={[styles.title,{fontFamily:"Metro-Bold"}]}>singupPage </Text>
//             <TextInput style ={styles.input} placeholder="Name"/>
//             <TextInput style ={styles.input} placeholder="Email" keyboardType="email-address"/>
//             <TextInput style ={styles.input} placeholder="Password" secureTextEntry={true}/>
//             <Text style = {[styles.signlnText,{fontFamily:"Metro-Medium"}]}>
//             Already have an account? </Text>
//             <TouchableOpacity style= {styles.buttonSignUp} onPress= {() => navigation.navigate("Login")}>
//                 <Text style = {styles.buttonText}>singupPage </Text>
//             </TouchableOpacity>
//             <Text style = {[styles.signlnText,{fontFamily:"Metro-Medium"}]}>
//              Or sign up with social account </Text>
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
// };

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
//     buttonSignUp:{
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

// export default singupPage