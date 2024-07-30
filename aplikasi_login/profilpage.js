import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

const profileData = [
    { title: "My orders", subtitle: "Already have 12 orders" },
    { title: "Shipping addresses", subtitle: "3 addresses" },
    { title: "Payment methods", subtitle: "Visa **34" },
    { title: "Promocodes", subtitle: "You have special promocodes" },
    { title: "My reviews", subtitle: "Reviews for 4 items" },
    { title: "Settings", subtitle: "Notifications, password" },
];

const ProfilePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My profile</Text>
            </View>
            <View style={styles.profileInfo}>
                <Image
                    source={require('../assets/poto.png')}
                    style={styles.profileImage}
                />
                <View>
                    <Text style={styles.profileName}>MAKMUR JAYA NUR</Text>
                    <Text style={styles.profileEmail}>makmurjayanur@email.com</Text>
                </View>
            </View>
            <FlatList
                data={profileData}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.listItem}>
                        <View>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                        </View>
                        <Text style={styles.itemArrow}>›</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    profileInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    profileName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    profileEmail: {
        fontSize: 14,
        color: "#666",
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: "500",
    },
    itemSubtitle: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
    itemArrow: {
        fontSize: 18,
        color: "#ccc",
    },
});