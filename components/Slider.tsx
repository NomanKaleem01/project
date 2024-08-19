import React, { useState } from 'react';
import { FlatList, View, Image, StyleSheet, Dimensions, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

const { width } = Dimensions.get('window');

type CarouselItem = {
  id: string;
  image: ImageSourcePropType;
};

const carouselData = [
  {
    id: '1',
    image: require('../assets/pic1.png'),
  },
  {
    id: '2',
    image: require('../assets/pic2.png'),
  },
  {
    id: '3',
    image: require('../assets/pic3.png'),
  },
  {
    id: '4',
    image: require('../assets/pic4.png'),
  },
];

const renderItem = ({ item }: { item: CarouselItem }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

const DotIndicator = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <View style={styles.dotContainer}>
      {carouselData.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: currentIndex === index ? 'blue' : 'gray' },
          ]}
        />
      ))}
    </View>
  );
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(currentIndex);
  };

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <DotIndicator currentIndex={currentIndex} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    marginBottom: 10,
  },
  imageContainer: {
    width: width,
    height: width * 0.51, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '70%',
    borderRadius: 15, 
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -15, 
  },
  dot: {
    borderRadius: 5,
    height: 8,
    width: 8,
    margin: 4,
  },
});
