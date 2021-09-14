import React, { useEffect, useReducer } from 'react';
import {useState} from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button,TouchableOpacity , Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MI from 'react-native-vector-icons/MaterialIcons';
//
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer'
import {getSyncDataByIndex, getSyncData, removeDatasync} from './AsyncDataStorage'

const styles = StyleSheet.create({
  sectionContainer: {marginTop: 32, paddingHorizontal: 24,},
  sectionTitle: {  fontSize: 24,  fontWeight: '600',},
  sectionDescription: {  marginTop: 8,  fontSize: 18,  fontWeight: '400',},
  highlight: {  fontWeight: '700',},
  input: {  height: 40,  margin: 12,  borderWidth: 1,},
});


//---main---function-------
const DrawerContent= props =>  {
  //console.log(props);
  //console.log(navigation);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};
  const [user, setUser]=useState([]);

  const fetchUserData=async()=>{
    var key= await getSyncDataByIndex(0,0)
    var userData = await getSyncData(key)
    console.log("userData" , userData)
    setUser(userData)
  }
  useEffect(function(){
    fetchUserData()
  },[])

  const handlelogout=async()=>{
    if(user==null){

    }
    else{
    var key = user.mobile;
    await removeDatasync(key);
    props.navigation.navigate("Login")
    }
    
  }
  return (
  
    <DrawerContentScrollView >
      <View style={{  flexDirection: 'column',  display: 'flex',  justifyContent: 'center',  alignItems: 'center',}}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50}}
          source={require('./images/alice.jpg')}
        />
        
        {user!=null? <Text style={{  padding: 5,  fontSize: 16,  fontWeight: 'bold',  letterSpacing: 1,}}>{user.firstname}</Text>:<Text>.</Text>}
        
        {user!=null? <Text style={{padding: 5, fontSize: 12, letterSpacing: 1}}>{user.email}</Text>:<Text>.</Text>}
        
      </View>
      <View>

      <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")}  >
        <View style={{marginLeft:10,padding:5,display: 'flex', flexDirection: 'row'}}>
          <MI name="home"  size={25} />
          <Text style={{padding:5}}>Home</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => props.navigation.navigate("Product")}  >
        <View style={{marginLeft:10,padding:5,display: 'flex', flexDirection: 'row'}}>
          <MI name="shopping-cart"  size={25} />
          <Text style={{padding:5}}>Products</Text>
        </View>
        </TouchableOpacity>

        <View style={{marginLeft:10,padding:5,display: 'flex', flexDirection: 'row'}}>
          <MI name="list-alt"  size={25} />
          <Text style={{padding:5}}>Orders</Text>
        </View>

       <TouchableOpacity onPress={()=>handlelogout() }  >{//props.navigation.navigate("Login")
       }
        <View style={{marginLeft:10,padding:5,display: 'flex', flexDirection: 'row'}}>
          <MI name="logout"  size={25} />
          <Text style={{padding:5}}>Logout</Text>
        </View>
       </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
    
    
  );
};
export default DrawerContent;




