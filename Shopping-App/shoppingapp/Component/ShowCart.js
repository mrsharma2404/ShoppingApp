import React from 'react';
import {  SafeAreaView,  View,  FlatList,  StyleSheet,  Text,  Image,  Dimensions,  StatusBar,} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';   
import {ServerURL, getData} from './fetchnodedata';
import MI from 'react-native-vector-icons/MaterialIcons';
//import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
    sectionContainer: {marginTop: 32, paddingHorizontal: 24,},
  sectionTitle: {  fontSize: 24,  fontWeight: '600',},
  sectionDescription: {  marginTop: 8,  fontSize: 18,  fontWeight: '400',},
  highlight: {  fontWeight: '700',},
  input: {  height: 40,  margin: 12,  borderWidth: 1,},

  container: {  flex: 1,  },
  item: {  borderRadius: 5,  borderWidth:0.5,  borderColor:'#bdc3c7',  padding: 20,  marginVertical: 8,  marginHorizontal: 16,},
  title: {  fontSize: 16,},
  });

const ProductItem = ({item, props}) => {
  //console.log(props.navigation)
  var dispatch = useDispatch();
  const handeldelete=(product_id)=>{
    dispatch({type:'REMOVE_ITEM', payload:[product_id]})
    refresh()
  }
  const refresh=()=>{
    props.navigation.navigate('Product')
    props.navigation.navigate('ShowCart')
  }

  
  return (
    <View style={styles.item}>
      {/*item.qtydemand==0? <View></View>:<View> //</View>*/}
      <View style={{display:'flex', flexDirection:'row'}}>
        <View style={{padding: 5}}>
         <Image style={{width: 100, height: 100}} source={{uri: `${ServerURL}/images/${item.image}`}}/>
        </View>
        <View style={{display:'flex', flexDirection:'column'}}>
        <Text style={styles.title}>{item.product_name}</Text>
        <Text style={{fontSize:16}}>Rs. {item.offer_price} * Qty {item.qtydemand} </Text>
        <Text style={styles.title}>Total = {parseInt(item.offer_price)*parseInt(item.qtydemand)}</Text>
        </View>
        <View style={{marginLeft:20, marginTop:10}} >
        <MI name="delete" size={30} onPress={(event) => handeldelete(item.product_id)}/>
        </View>
       
        </View>
      </View>
  );
};

const ShowCart = props => {
  var cart = useSelector(state => state.cart);
  var values = Object.values(cart);
  var actualamount = values.reduce(actualcalculation, 0)
  const [productList, setProductList] = useState(values);
 
  function actualcalculation(a,b){
    var price = b.offer_price * b.qtydemand
    return a + price;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{display:'flex',backgroundColor:'#1e90ff', flexDirection:'row' , padding:10}}>
        <MI name="menu" size={30} onPress={() => props.navigation.openDrawer()} />
        <Text style={{textAlign:'center', fontSize:25, marginLeft:10, marginRight:140 }}> Cart </Text>
      </View> */}
      <FlatList
        data={productList}
        renderItem={({item}) => <ProductItem item={item} props={props} />}
        keyExtractor={item => item.id}
      />
      <View >
      <Text style={{textAlign:'center', fontSize:20 }}>Net Amount : {actualamount}</Text>
      <Text style={{textAlign:'center', fontSize:22 , color:'white',backgroundColor:'orange' , width:'80%' , padding:10, marginBottom:10, marginLeft:'10%', borderRadius:5}}>Proceed to Pay</Text>
      </View>
    </SafeAreaView>
  );
};



export default ShowCart;
