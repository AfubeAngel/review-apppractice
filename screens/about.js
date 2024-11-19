import { globalStyles } from '@/styles/global';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const About = () => {

  return (
    <View style={globalStyles.container}>
        <Text>About us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default About;