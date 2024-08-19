import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const { width } = Dimensions.get('window');

const WishlistScreen: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'wishlist', title: 'WISHLIST' },
    { key: 'recentlyViewed', title: 'RECENTLY VIEWED' },
  ]);

  const renderScene = SceneMap({
    wishlist: () => (
      <View style={styles.content}>
        <LottieView
          source={require('../assets/list.json')}
          autoPlay
          loop
          style={styles.animation}
        />
        <Text style={styles.title}>Make a wish!</Text>
        <Text style={styles.subtitle}>
          Craft your own wish-list and guarantee that your favourite items are always on your radar.
        </Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.button} onPress={() => { /* Handle explore button press */ }}>
              <Text style={styles.buttonText}>Explore Products</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ),
    recentlyViewed: () => (
      <View style={styles.content}>
        <LottieView
          source={require('../assets/emptycart.json')}
          autoPlay
          loop
          style={styles.animation}
        />
        <Text style={styles.title}>Discover Your Perfect Pair!</Text>
        <Text style={styles.subtitle}>
          We keep track all your recently explored products so you can shop without worries
        </Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.button} onPress={() => { /* Handle explore button press */ }}>
              <Text style={styles.buttonText}>Discover Products</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ),
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#000' }}
      style={{ backgroundColor: '#fff' }}
      labelStyle={styles.tabLabel}
    />
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => { /* Handle back button press */ }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton} onPress={() => { /* Handle search button press */ }}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => { /* Handle cart button press */ }}>
            <Ionicons name="cart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 8,
  },
  tabLabel: {
    fontSize: 16,
    color: '#777',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  animation: {
    width: width * 0.9,
    height: width * 0.9,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    width:0.8*width,
    marginBottom: 30,
  },
  cardContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 3,
    width: 0.9 * width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1a1a3b',
    paddingVertical: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
