import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button ,Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MI from 'react-native-vector-icons/MaterialIcons';
//var Carousel = require('react-native-carousel')

const styles = StyleSheet.create({
  sectionContainer: {marginTop: 32, paddingHorizontal: 24,},
  sectionTitle: {  fontSize: 24,  fontWeight: '600',},
  sectionDescription: {  marginTop: 8,  fontSize: 18,  fontWeight: '400',},
  highlight: {  fontWeight: '700',},
  input: {  height: 40,  margin: 12,  borderWidth: 1,},
  container: {width: 375,flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'transparent',},
});


//---main---function-------
const HomeScreen = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};

  return (
    <View  > 
      {//<MI name="menu" size={30} onPress={() => props.navigation.openDrawer()} />
}
      <Text style={{ fontWeight: 'bold' , textAlign:'center', fontSize:25 , marginTop:30 }}>  </Text>
      <View style={{display:'flex', flexDirection:'row'}} >
      <Image  style={{width: 100, height: 80, marginLeft: 20, display:'flex', flexDirection:'row'}} source={require('./images/laptop.jpg')}/>
      <Image  style={{width: 100, height: 80, marginLeft: 20, display:'flex', flexDirection:'row'}} source={require('./images/mobile.jpg')}/>
      <Image  style={{width: 100, height: 80, marginLeft: 20, display:'flex', flexDirection:'row'}} source={require('./images/accesories.jpg')}/>
      </View>
    </View> 
  );
};



export default HomeScreen;
