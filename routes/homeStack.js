import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

// Shared screen options
const screenOptions = {
  headerStyle: {
    backgroundColor: '#eee',
    height: 80,
  },
  headerTintColor: '#444',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};


function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{
          title: 'GameZone',
          ...screenOptions
        }} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails}
      options={{
        title: 'Review Details',
        ...screenOptions
      }} />
    </Stack.Navigator>
  );
}

export default HomeStack;

