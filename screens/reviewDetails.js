import React from 'react';
import { globalStyles } from '@/styles/global';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ReviewDetails = ({route}) => {

  const { item } = route.params;
  const navigation = useNavigation();

  const pressHandler =() => {
    navigation.navigate('Home')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={[styles.header, globalStyles.text]}>Review Details</Text>
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
        <Text style={styles.rating}>Rating: {item.rating}/5</Text>
      </View>
        <Button title='Go back Home' onPress={pressHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReviewDetails;