import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button ,StatusBar, TouchableOpacity,} from 'react-native';
//for drawer

import HomeScreen from './Home';
import LoginScreen from './Login';
import DrawerContent from './DrawerContent';
import Product from './Product';
import FA from 'react-native-vector-icons/FontAwesome';
import MI from 'react-native-vector-icons/MaterialIcons';
import {Badge} from 'react-native-elements';
import {useSelector} from 'react-redux';



const AppHeader=(props)=>{
    var cart = useSelector(state => state.cart);
    var keys = Object.keys(cart);
    console.log('header 22', props.previous.__memo[0].name);
    var screenName =  props.scene.__memo[0].name;
    
    var previouspage = props.previous.__memo[0].name
    return(
    <View  > 
     {/*<StatusBar translucent backgroundColor="transparent"  />*/}
    <View style={{display:'flex',backgroundColor:'#329da8', flexDirection:'row' , padding:10}}>
        {screenName=="HomeScreen"? <MI name="menu" size={30} onPress={() => props.navigation.openDrawer()} />:
            <MI name="previous" size={30} onPress={() => props.navigation.navigate(previouspage)} />}
        
        <Text style={{textAlign:'center', fontSize:25, marginLeft:10, marginRight:140 }}> {screenName} </Text>
        <TouchableOpacity  onPress={()=>props.navigation.navigate('ShowCart')}>
        <View>
            <FA name="shopping-cart" color="#FFF" size={30} />
            <Badge status="error" value={keys.length} 
            containerStyle={{position: 'absolute', top: -7, right: 10}} />
        </View>
        </TouchableOpacity>
  </View>
  </View>
  
  )
  }
export default AppHeader;