import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

// Komponen ButtonCustom
const ButtonCustom = ({ text, color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: color }]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

// Komponen TextInputCustom
const TextInputCustom = ({ placeholder, color, typeKeyboard, value, onChangeText }) => {
    return (
        <TextInput
            keyboardType={typeKeyboard}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={[styles.textInput, { borderColor: color }]}
        />
    );
};

// Halaman ForgetPasswordPage
const ForgetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const [dapatFont] = useFonts({
        "MetroBold": require("../assets/fonts/Metropolis-Bold.otf"),
        "MetroMedium": require("../assets/fonts/Metropolis-Medium.otf"),
    });

    const navigation = useNavigation();

    if (!dapatFont) {
        return <Text>Font tidak ditemukan...</Text>;
    }

    const validateEmail = () => {
        if (email === '') {
            setError(true);
        } else {
            setError(false);
            // Tambahkan logika pengiriman email di sini jika diperlukan
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image source={require("../assets/icon_tandapanah.png")} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.title}>Forget Password</Text>
                <Text style={styles.subtitle}>
                    Please, enter your email address. You will receive a link to create a new password via email
                </Text>
            </View>
            <View style={styles.form}>
                <TextInputCustom
                    placeholder="Email"
                    color={error ? "red" : "black"}
                    typeKeyboard="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                {error && <Text style={styles.errorText}>Email tidak boleh kosong</Text>}
                <ButtonCustom text="SEND" color="red" onPress={validateEmail} />
            </View>
        </View>
    );
};

// Gaya untuk halaman ForgetPasswordPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 16,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    backIcon: {
        width: 30,
        height: 30,
    },
    header: {
        width: "100%",
        alignItems: "center",
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontFamily: "MetroBold",
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        color: "#555",
        width: "80%",
        textAlign: "center",
    },
    form: {
        width: "100%",
        alignItems: "center",
    },
    textInput: {
        width: "80%",
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingLeft: 10,
        fontFamily: "MetroMedium",
    },
    button: {
        width: 80,
        height: 50,
        borderRadius: 25,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    errorText: {
        color: "red",
        marginBottom: 16,
    },
});

export default ForgetPasswordPage;
