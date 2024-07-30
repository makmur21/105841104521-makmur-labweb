import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
       source={require('../assets/gambarhome.png')} 
        style={styles.mainImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.mainText}>Fashion sale</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.scrollContainer}>
        <View style={styles.itemContainer}>
          <Image
            source={require('../assets/gambar2.png')} 
            style={styles.itemImage}
          />
          <Text style={styles.newText}>New</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={require('../assets/gambar3.png')} 
            style={styles.itemImage}
          />
          <Text style={styles.newText}>New</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={require('../assets/gambar4.png')} 
            style={styles.itemImage}
          />
          <Text style={styles.newText}>New</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainImage: {
    width: '100%',
    height: 400,
  },
  overlay: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  mainText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  scrollContainer: {
    marginTop: 20,
    paddingLeft: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  newText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});