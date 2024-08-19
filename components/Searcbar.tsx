import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

type SearchBarProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Glasses"
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: width * 0.02, 
    paddingHorizontal: width * 0.04,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: width * 0.1, 
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.03, 
    borderRadius: width * 0.02, 
    borderColor: '#ddd',
    borderWidth: 1,
  },
});
