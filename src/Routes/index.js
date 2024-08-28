import React from 'react';
import { Text, StyleSheet, View, Image,FlatList,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../Screens/Details/index';
import Home from '../screens/Home/index';

export default function App() {

      const stack = createStackNavigator ();
  return (
           <NavigationContainer>

              <stack.Navigator>

              <stack.Screen name = 'Home' component = {Home}></stack.Screen>
              <stack.Screen name = 'Details' component = {Details}></stack.Screen> 

              </stack.Navigator>

          </NavigationContainer> 
  );
}
