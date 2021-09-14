import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//for drawer
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './Home';
import LoginScreen from './Login';
import DrawerContent from './DrawerContent';
import Product from './Product';
import FA from 'react-native-vector-icons/FontAwesome';
import MI from 'react-native-vector-icons/MaterialIcons';
import AppHeader from './AppHeader';
import ShowCart from './ShowCart';
import ProductById from './ProductByID';

const styles = StyleSheet.create({
  sectionContainer: {marginTop: 32, paddingHorizontal: 24,},
  sectionTitle: {  fontSize: 24,  fontWeight: '600',},
  sectionDescription: {  marginTop: 8,  fontSize: 18,  fontWeight: '400',},
  highlight: {  fontWeight: '700',},
  input: {  height: 40,  margin: 12,  borderWidth: 1,},
});


//---main---function-------
export default function RootNavigator (props) {
   const Drawer = createDrawerNavigator();
  
    const StackNav = createStackNavigator()
    function Component()
    {
      return(
        <StackNav.Navigator> 
          <StackNav.Screen name="Login" component={LoginScreen}
              options={{headerShown: false}} />
          <StackNav.Screen  name="Product" component={Product}
               options={{  header: AppHeader, }} />

         

         

            <StackNav.Screen  name="HomeScreen" component={HomeScreen}
              options={{  header: AppHeader, }} />
            
            <StackNav.Screen  name="AppHeader" component={AppHeader}
              options={{headerShown: false}} />
             <StackNav.Screen  name="ShowCart" component={ShowCart}
               options={{  header: AppHeader, }} />
              <StackNav.Screen  name="ProductById" component={ProductById}
               options={{  header: AppHeader, }} />

              
        </StackNav.Navigator>
      )
    }

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};
  

  return (
   
     <Drawer.Navigator   drawerContent={(props) => <DrawerContent {...props}  /> } >
         <Drawer.Screen name="Home" component={Component}  options={{headerShown: false}}/>
     </Drawer.Navigator>
   
    
  );
};




