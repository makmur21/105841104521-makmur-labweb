import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

// Sign Up Screen
const ButtonCustom = ({ text, color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                width: 80,
                height: 50,
                backgroundColor: color,
                borderRadius: 25,
                marginTop: 20,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const TextInputCustom = ({ placeholder, color, typeKeyboard, value, onChangeText }) => {
    return (
        <TextInput
            keyboardType={typeKeyboard}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={{
                width: "80%",
                height: 40,
                borderColor: color,
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 20,
                paddingLeft: 10,
                fontFamily: "MetroMedium",
            }}
        />
    );
};

const ForgetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const [dapatFont] = useFonts({
        "MetroBold": require("../assets/fonts/Metropolis-Bold.otf"),
        "MetroMedium": require("../assets/fonts/Metropolis-Medium.otf"),
    });

    const navigation = useNavigation();

    if (!dapatFont) {
        return <Text>Font tidak ditemukan...</Text>
    }

    const validateEmail = () => {
        if (email === '') {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 16,
        }}>
            <View style={{
                width: "100%",
                alignItems: "center",
                marginBottom: 24,
            }}>
                <Text style={{
                    fontSize: 24,
                    fontFamily: "MetroBold",
                    marginBottom: 16
                }}>Forget Password</Text>

                <Text style={{
                    fontSize: 16,
                    color: "#555",
                    width: "80%",
                    textAlign: "center",
                }}>Please, enter your email address. You will receive a link to create a new password via email</Text>
            </View>
            <View style={{
                width: "100%",
                alignItems: "center",
            }}>
                <TextInputCustom
                    placeholder="Email"
                    color={error ? "red" : "black"}
                    typeKeyboard="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <ButtonCustom text="SEND" color="red" onPress={validateEmail} />
            </View>
        </View>
    )
}

export default ForgetPasswordPage;
