import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/index';
import {SingleMovieScreen} from '../screens';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="singleMovie" component={SingleMovieScreen} />
  </Stack.Navigator>
);

export default HomeStack;
