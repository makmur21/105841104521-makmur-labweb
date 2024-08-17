import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

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
const TextInputCustom = ({ placeholder, color, typeKeyboard }) => {
    return (
        <TextInput
            keyboardType={typeKeyboard}
            placeholder={placeholder}
            style={[styles.textInput, { borderColor: color }]}
        />
    );
};

// Halaman SignupPage
const SignupPage = ({ navigation }) => {
    const [dapatFont] = useFonts({
        "MetroBold": require("../assets/fonts/Metropolis-Bold.otf"),
        "MetroMedium": require("../assets/fonts/Metropolis-Medium.otf"),
    });

    if (!dapatFont) {
        return <Text>Font tidak ditemukan...</Text>;
    }

    // Fungsi handleSignupSuccess
    const handleSignupSuccess = () => {
        console.log("Sign Up Success!");
        navigation.navigate("Home"); // Ganti "HomePage" dengan nama halaman tujuan
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SIGN UP</Text>
            <View style={styles.form}>
                <TextInputCustom placeholder="Name" color="black" typeKeyboard="default" />
                <TextInputCustom placeholder="Email" color="black" typeKeyboard="email-address" />
                <TextInputCustom placeholder="Password" color="black" typeKeyboard="default" />

                <ButtonCustom text="SIGN UP" color="red" onPress={handleSignupSuccess} />
                
                <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
                    <Text style={styles.linkText}>Already have an account?</Text>
                </TouchableOpacity>

                <View style={styles.socialLoginRow}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require("../src/google.png")} style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require("../src/fecebook.png")} style={styles.socialIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
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
    title: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: "MetroBold",
        marginBottom: 16,
        marginTop: 50,
    },
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        width: 250,
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingLeft: 10,
        fontFamily: "MetroMedium",
    },
    button: {
        width: 320,
        height: 50,
        borderRadius: 50,
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    linkText: {
        fontSize: 16,
        color: "#555",
        marginBottom: 16,
        textAlign: "center",
        width: '100%',
    },
    socialLoginRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "50%",
    },
    socialButton: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
    },
    socialIcon: {
        width: 40,
        height: 40,
    },
});

export default SignupPage;
