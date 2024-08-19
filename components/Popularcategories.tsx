import React from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

type CategoryItem = {
  id: string;
  image: ImageSourcePropType;
  label: string;
};

const categories: CategoryItem[] = [
  {
    id: '1',
    image: require('../assets/men.png'),
    label: 'Men',
  },
  {
    id: '2',
    image: require('../assets/women.png'),
    label: 'Women',
  },
  {
    id: '3',
    image: require('../assets/kids.png'),
    label: 'Kids',
  },
  {
    id: '4',
    image: require('../assets/image.jpg'),
    label: 'Kids',
  },
];

const PopularCategories = () => {
  return (
    <View style={styles.container}>
      {categories.map((item) => (
        <View key={item.id} style={styles.categoryContainer}>
          <Image source={item.image} style={styles.categoryImage} />
          <Text style={styles.categoryLabel}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    marginBottom: 10,
    width: width * 0.21,
  },
  categoryImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
   
    borderRadius: 10,
  },
  categoryLabel: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default PopularCategories;
