import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button, StatusBar, TouchableOpacity,FlatList, SafeAreaView, Image} from 'react-native';
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
  title: {  fontSize: 16,},
});

const ProductItem = ({item, props}) => {
    //console.log(item.company_name)
    var dispatch = useDispatch();


   
        const handleproduct=(item)=>{
          props.navigation.navigate('ProductById',{item:item})
        }
    return (
      <View style={styles.item}>
        <View style={{display:'flex', flexDirection:'row'}}>
        <TouchableOpacity  onPress={(event)=>handleproduct(item)}>
        <View style={{padding: 5}}>
         <Image style={{width: 100, height: 100}} source={{uri: `${ServerURL}/images/${item.image}`}}/>
        </View>
        </TouchableOpacity>
        <View style={{display:'flex', flexDirection:"column"}}>
        <Text style={styles.title}>{item.product_name}</Text>
        <Text style={{fontSize:13,  textDecorationLine: 'line-through',}}>Rs. {item.MRP}</Text>
        <Text style={{fontSize:15, color:'green'}}>Rs. {item.offer_price}</Text>
        </View>
        </View>
      </View>
    );
  };


//---main---function-------
const Product = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};

  const [productList, setProductList] = useState([]);

  useEffect(function () {
    fetchAllCategories();
  },[]);

  const fetchAllCategories = async () => {
    //alert('hlo')
    var list = await getData('product/productlist');
    //alert(list.result)
    setProductList(list);
    settemplist(list); //this is for search
    //console.log(list)
    //alert('hello')
  };
  //alert("hii")
  
  const [templist, settemplist]=useState([])
  const [searchtxt, setsearchtxt]=useState()
  const searching=(txt)=>{
    setsearchtxt(txt)
    var result = templist.filter((item)=>{
      return item.product_name.includes(txt)
    })
    setProductList(result)
  }

  
  return (
      <SafeAreaView style={styles.container}>
      <View>
        {/*
      <View style={{display:'flex', flexDirection:'row'}}>
        <MI name="menu" size={30} onPress={() => props.navigation.openDrawer()}/>
        <Text style={{ fontWeight: 'bold' , textAlign:'center', fontSize:25, marginLeft:10,  }}> Products </Text>
      </View>
       */}
      <View style={{padding:1}}>
      <Input
          onChangeText={txt => searching(txt)}
          placeholder="Search Product Here..." placeholderTextColor="#000" underlineColor="#000"
          leftIcon={<FA name="search" size={16} color={'#000'} />}
        />
      </View>
      </View>
      <FlatList
        data={productList}
        renderItem={({item}) => <ProductItem item={item} props={props} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
 
  );
};



export default Product;
