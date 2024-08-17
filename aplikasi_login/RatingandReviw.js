import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';

const RatingandReviw = [
  {
    id: '1',
    name: 'Helene Moore',
    date: 'June 15, 2019',
    rating: 5,
    review: "The dress is great! Very classy and comfortable. It fit perfectly. I'm 5'7 and 100 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.",
    image: null,
  },
  // Additional reviews can be added here
];

export default function RatingReviews() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rating & Reviews</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.3</Text>
          <Rating
            type='custom'
            ratingCount={5}
            imageSize={20}
            startingValue={4.3}
            readonly
            ratingColor="#FFD700"
            ratingBackgroundColor="#E8E8E8"
          />
          <Text style={styles.ratingCount}>(23 ratings)</Text>
        </View>

        <View style={styles.ratingDistribution}>
          <RatingBar count={12} star={5} />
          <RatingBar count={4} star={4} />
          <RatingBar count={5} star={3} />
          <RatingBar count={2} star={2} />
          <RatingBar count={0} star={1} />
        </View>

        <View style={styles.reviewFilter}>
          <Text style={styles.reviewCount}>8 reviews</Text>
          <View style={styles.filterContainer}>
            <Text style={styles.filterText}>With photo</Text>
            <Icon name="check-box-outline-blank" size={20} color="#B0B0B0" />
          </View>
        </View>
      </View>

      <FlatList
        data={RatingandReviw}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
            <Image
            source={require('../assets/poto12.png')} // Placeholder for user image
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
            {item.image && <Image source={{ uri: item.image }} style={styles.reviewImage} />}
          </View>
        )}
      />

      <TouchableOpacity style={styles.reviewButton}>
        <Text style={styles.reviewButtonText}>Write a review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const RatingBar = ({ count, star }) => (
  <View style={styles.ratingBar}>
    <Text style={styles.starText}>{star}</Text>
    <Icon name="star" size={20} color="#FFD700" />
    <View style={styles.ratingBarBackground}>
      <View style={[styles.ratingBarFill, { width: `${(count / 12) * 100}%` }]} />
    </View>
    <Text style={styles.ratingBarCount}>{count}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginRight: 10,
  },
  ratingCount: {
    marginLeft: 10,
    fontSize: 14,
    color: '#B0B0B0',
  },
  ratingDistribution: {
    marginVertical: 20,
  },
  ratingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starText: {
    fontSize: 14,
    marginRight: 5,
  },
  ratingBarBackground: {
    flex: 1,
    height: 10,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  ratingBarFill: {
    height: 10,
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  ratingBarCount: {
    width: 30,
    textAlign: 'right',
    fontSize: 14,
  },
  reviewFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
  reviewImage: {
    width: '100%',
    height: 200,
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


