import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function RatingReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [photo, setPhoto] = useState(null);

  const ClientsReview = (rate) => {
    setRating(rate);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rating and reviews</Text>
      
      <View style={styles.reviewsHeader}>
        <Text style={styles.reviewCount}>8 reviews</Text>
        <TouchableOpacity style={styles.withPhotoContainer}>
          <Text style={styles.withPhotoText}>With photo</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.question}>What is your rate?</Text>
      
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => ClientsReview(star)}>
            <FontAwesome
              name={star <= rating ? "star" : "star-o"}
              size={30}
              color="#FFD700"
            />
          </TouchableOpacity>
        ))}
      </View>
      
      <Text style={styles.subtext}>Please share your opinion about the product</Text>
      
      <TextInput
        style={styles.textInput}
        placeholder="Your review"
        value={review}
        onChangeText={setReview}
      />
      
      <TouchableOpacity style={styles.photoContainer}>
        <FontAwesome name="camera" size={30} color="red" />
        <Text style={styles.photoText}>Add your photos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>SEND REVIEW</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  reviewCount: {
    fontSize: 16,
  },
  withPhotoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  withPhotoText: {
    fontSize: 14,
    color: '#555',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  subtext: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  textInput: {
    height: 100,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  photoContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
  },
  sendButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
