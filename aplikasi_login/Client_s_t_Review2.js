import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ClientsReview2 = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [photos, setPhotos] = useState([]);


  const addSampleImage = () => {
    // Tambahkan URI gambar contoh yang ada dalam aplikasi
    const sampleImageUri = 'https://via.placeholder.com/100';
    setPhotos([...photos, sampleImageUri]);
  };

  const renderPhoto = ({ item }) => (
    <Image source={require('../assets/poto7.png')} style={styles.photo} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rating and reviews</Text>
      <Text style={styles.subtitle}>8 reviews</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.label}>What is your rate?</Text>
        <View style={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i + 1)}>
              <FontAwesome
                name={i < rating ? 'star' : 'star-o'}
                size={30}
                color={i < rating ? '#f1c40f' : '#ccc'}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text style={styles.label}>Please share your opinion about the product</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your review"
        multiline
        numberOfLines={4}
        value={review}
        onChangeText={setReview}
      />
      <FlatList
        data={photos}
        renderItem={renderPhoto}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
      <TouchableOpacity style={styles.photoButton} onPress={addSampleImage}>
        <FontAwesome name="camera" size={24} color="red" />
        <Text style={styles.photoText}>Add your photos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>SEND REVIEW</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  photoText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'red',
  },
  submitButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});