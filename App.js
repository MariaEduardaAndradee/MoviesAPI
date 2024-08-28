import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/Routes'


export default function App() {
  
  const stack = createStackNavigator();
  
  return (
   
    <Routes></Routes>

  );
  
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems:"center"
    
    
  },
});