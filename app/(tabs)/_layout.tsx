import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width } = Dimensions.get('window');

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
       
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ar_module"
        options={{
          title: 'AR_Module',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.arModuleIconContainer}>
              <TabBarIcon
                name={focused ? 'cube' : 'cube-outline'}
                color={color}
                style={styles.arModuleIcon}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ai_recommendation"
        options={{
          title: 'AI_Recommendation',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bulb' : 'bulb-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  arModuleIconContainer: {
    position: 'absolute',
    bottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.18, 
    height: width * 0.18, 
    borderRadius: (width * 0.18) / 2,
    backgroundColor: 'pink',
  },
  arModuleIcon: {
    fontSize: width * 0.1, 
  },
 
});
