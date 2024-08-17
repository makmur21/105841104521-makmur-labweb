import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';

const RatingandReviw2 = [
  {
    id: '1',
    name: 'Kim Shine',
    date: 'August 13, 2023',
    rating: 5,
    review: "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it trimmed the pud and I got so many compliments.",
    images: [
      'https://via.placeholder.com/100', 
      'https://via.placeholder.com/100', 
      'https://via.placeholder.com/100'
    ],
  },
  {
    id: '2',
    name: 'Matilda Brown',
    date: 'August 12, 2023',
    rating: 4,
    review: "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body.",
    images: null,
  },
];

export default function RatingReviews() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Rating and Reviews</Text>
      <View style={styles.reviewFilter}>
        <Text style={styles.reviewCount}>8 reviews</Text>
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>With photo</Text>
          <CheckBox value={false} />
        </View>
      </View>

      <FlatList
        data={RatingandReviw2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
            <Image
            source={require('../assets/poto13.png')} 
            style={styles.userImage}
            />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{item.name}</Text>
                <Rating
                  type='custom'
                  ratingCount={5}
                  imageSize={16}
                  startingValue={item.rating}
                  readonly
                  ratingColor="#FFD700"
                  ratingBackgroundColor="#E8E8E8"
                />
                <Text style={styles.reviewDate}>{item.date}</Text>
              </View>
            </View>
            <Text style={styles.reviewText}>{item.review}</Text>
            {item.images && (
              <View style={styles.imagesContainer}>
                {item.images.map((imgUri, index) => (
                  <Image key={index} source={require('../assets/poto10.png')} style={styles.reviewImage} />
                ))}
              </View>
            )}
          </View>
        )}
      />

      <TouchableOpacity style={styles.reviewButton}>
        <Text style={styles.reviewButtonText}>Write a review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reviewFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  reviewCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    marginRight: 5,
  },
  reviewCard: {
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  reviewHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewDate: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  reviewText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  reviewButton: {
    backgroundColor: '#FF4D4F',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  reviewButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
