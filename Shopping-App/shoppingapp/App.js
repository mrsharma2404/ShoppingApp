import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './Component/Home';
//
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from './Component/RootNavigator';
//
import RootReducer from './Component/RootReducer'
import {createStore} from 'redux'
import { Provider } from 'react-redux';


const styles = StyleSheet.create({
  sectionContainer: {marginTop: 32, paddingHorizontal: 24,},
  sectionTitle: {  fontSize: 24,  fontWeight: '600',},
  sectionDescription: {  marginTop: 8,  fontSize: 18,  fontWeight: '400',},
  highlight: {  fontWeight: '700',},
  input: {  height: 40,  margin: 12,  borderWidth: 1,},
});

const store = createStore(RootReducer)
const App = props => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  
    
  );
};



export default App;
