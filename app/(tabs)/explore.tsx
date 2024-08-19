import { Image, Text,View, StyleSheet } from 'react-native';


export default function Profile() {
  return (
    <View style={styles.titleContainer}>
      <Text>Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
