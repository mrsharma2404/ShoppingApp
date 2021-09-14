import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button, TouchableOpacity, FlatList, SafeAreaView, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MI from 'react-native-vector-icons/MaterialIcons';
import {ServerURL, getData} from './fetchnodedata';
import NumericInput from 'react-native-numeric-input'
import {Input} from 'react-native-elements';
import FA from 'react-native-vector-icons/FontAwesome';
//
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  sectionContainer: {marginTop: 32, paddingHorizontal: 24,},
  sectionTitle: {  fontSize: 24,  fontWeight: '600',},
  sectionDescription: {  marginTop: 8,  fontSize: 18,  fontWeight: '400',},
  highlight: {  fontWeight: '700',},
  input: {  height: 40,  margin: 12,  borderWidth: 1,},

  container: {  flex: 1,  },
  item: {  borderRadius: 5,  borderWidth:0.5,  borderColor:'#bdc3c7',  padding: 20,  marginVertical: 8,  marginHorizontal: 16,},
  title: {  fontSize: 20,},
});




//---main---function-------
const ProductById = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};

  useEffect(function () {
    
  },[]);
  var dispatch = useDispatch();
  const [getQty, setQty]=useState(0)
  const handleqty =(item, value)=>{
      item.qtydemand = value
      if(value==0){
        dispatch({type:'REMOVE_ITEM', payload:[item.product_id]})
        setQty(value)
        props.navigation.setParams({x: ''}); 
      }
      else{
        dispatch({type:'ADD_CART', payload:[item.product_id,item]})
        setQty(value)
        props.navigation.setParams({x: ''}); //we use this to set data to header  
      }
          }
          //console.log("productbyidprops", props.route.params.item)
          var item = props.route.params.item
          //console.log("ProductById item", item)

  return (
      <SafeAreaView style={styles.container}>
     
        {/*
      <View style={{display:'flex', flexDirection:'row'}}>
        <MI name="menu" size={30} onPress={() => props.navigation.openDrawer()}/>
        <Text style={{ fontWeight: 'bold' , textAlign:'center', fontSize:25, marginLeft:10,  }}> Products </Text>
      </View>
       */}
     <View style={styles.item}>
     
        <View style={{padding: 5}}>
         <Image style={{width: 300, height: 250}} source={{uri: `${ServerURL}/images/${item.image}`}}/>
        </View>
       
        <Text style={styles.title}>{item.product_name}</Text>
        <Text style={{fontSize:14,  textDecorationLine: 'line-through',}}>Rs. {item.MRP}</Text>
        <Text style={{fontSize:16, color:'green'}}>Rs. {item.offer_price}</Text>
        {getQty==0? <TouchableOpacity  onPress={()=>handleqty(item,1)}><Text style={{fontSize:28, backgroundColor:'green', color:'white', textAlign:'center', borderRadius:5}}>Add to Cart</Text></TouchableOpacity>:
         <NumericInput value={getQty} onChange={value => handleqty(item,value)} rounded iconSize={10}/> }
       

      </View>
     
    </SafeAreaView>
 
  );
};



export default ProductById;
