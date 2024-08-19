import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={require('../assets/noman.jpg')} style={styles.profilePic} />
        <Text style={styles.name}>Noman Kaleem</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => router.push('./Wishlist')} // Bypass TypeScript error
        >
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="cart-outline" size={24} color="black" onPress={() => router.push('./cart')}  />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.18, 
    paddingHorizontal: width * 0.04, 
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: width * 0.1, 
    height: width * 0.1, 
    borderRadius: (width * 0.1) / 2, 
  },
  name: {
    marginLeft: width * 0.02, 
    fontSize: width * 0.04, 
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: width * 0.03,
  },
});
