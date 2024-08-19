import { Image, Text,View, StyleSheet } from 'react-native';
import Slider from '@/components/Slider';
import SearchBar from '@/components/Searcbar';
import Popularcategories from '@/components/Popularcategories';
import Sunglasses from '@/components/Sunglasses';
import Topbar from '@/components/topbar';;
import { useState } from 'react';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <View>
    <Topbar/>
    <View >
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </View>

    <View>
      <Slider/>
      </View>
  
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:12}}>
          Eyeglasse
        </Text>
        <View style={{}}>
        <Text style={{width:65,padding:3,marginTop:5,marginLeft:10,backgroundColor:'lightgrey',borderRadius:8,fontSize:11,justifyContent:'center',textAlign:'center'}} >With power</Text>
      </View>
      </View>
      <Popularcategories/>
      <View>
      <Text style={{fontSize:20,fontWeight:'bold',marginLeft:12,marginTop:-19}}>
          Sunglasses
        </Text>
      </View>
      <Sunglasses/>
      </View>
  
  );
  
}



   
    
