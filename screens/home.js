import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const [reviews, setReviews] = useState([
    {title: 'It was a good book', rating:4, body:"awesome read", key:'1'},
    {title: 'It was a great book', rating:3, body:"awesome read", key:'2'},
    {title: 'It was a cool movie', rating:3, body:"awesome read", key:'3'},
  ]);

  const navigation = useNavigation();

  const pressHandler = (item) => {
    navigation.navigate('ReviewDetails', {item});
  };

  return (
    <View style={globalStyles.container}>
        <Text style={[globalStyles.text, styles.header]}>Home</Text>
        <FlatList 
        data={reviews} 
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Text style={globalStyles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
   marginBottom: 10,
   fontSize: 25,
   fontWeight: 'bold',
   color: '#333',
  },
  button: {
    marginBottom: 10,
  },
});

export default Home;

