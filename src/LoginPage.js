import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

// Komponen CustomButton
const CustomButton = ({ text, color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: color }]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

// Komponen CustomTextInput
const CustomTextInput = ({ placeholder, keyboardType }) => {
    return (
        <TextInput
            keyboardType={keyboardType}
            placeholder={placeholder}
            style={styles.textInput}
        />
    );
};

// Halaman Login
export default function LoginPage() {
    const [dapatFont] = useFonts({
        "MetroBold": require("../assets/fonts/Metropolis-Bold.otf"),
        "MetroMedium": require("../assets/fonts/Metropolis-Medium.otf"),
    });

    const navigation = useNavigation();

    if (!dapatFont) {
        return <Text>Font tidak ditemukan...</Text>;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image source={require("../assets/icon_tandapanah.png")} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.form}>
                    <CustomTextInput placeholder="Email" keyboardType="email-address" />
                    <CustomTextInput placeholder="Password" keyboardType="default" />
                    <View style={styles.forgotPasswordContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPasswordPage')}>
                            <Text style={styles.forgotPasswordText}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    <CustomButton
                        text='LOGIN'
                        color="red"
                        onPress={() => navigation.reset({
                            index: 0,
                            routes: [{ name: 'App' }],
                        })}
                    />
                </View>
            </View>
            <Text style={styles.socialLoginText}>Or login with social account</Text>
            <View style={styles.logoRow}>
                <View style={styles.logoContainer}>
                    <Image source={require("./fecebook.png")} style={styles.logo} />
                </View>
                <View style={styles.logoContainer}>
                    <Image source={require("./google.png")} style={styles.logo} />
                </View>
            </View>
        </View>
    );
}

// Gaya halaman
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F8FF",
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        width: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontFamily: "MetroBold",
        marginBottom: 20,
    },
    textInput: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 18,
        fontFamily: "MetroMedium",
    },
    button: {
        width: 100,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    forgotPasswordContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 10,
    },
    forgotPasswordText: {
        fontSize: 16,
        textAlign: "center",
    },
    socialLoginText: {
        fontSize: 16,
        textAlign: "center",
        marginVertical: 20,
    },
    logoRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    logoContainer: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 10,
    },
    logo: {
        width: 50,
        height: 50,
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
});

