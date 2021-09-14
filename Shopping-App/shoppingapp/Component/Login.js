import React, { useEffect, useRef } from "react";
import {useState} from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button,TouchableOpacity,ImageBackground,Dimensions,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RBSheet from "react-native-raw-bottom-sheet";
import FA from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { postData,postDataImage } from "./fetchnodedata";
import {storeDatasync, getSyncData, checkSyncData} from "./AsyncDataStorage"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  sectionContainer: {marginTop: 32, paddingHorizontal: 24,},
  sectionTitle: {  fontSize: 24,  fontWeight: '600',},
  sectionDescription: {  marginTop: 8,  fontSize: 18,  fontWeight: '400',},
  highlight: {  fontWeight: '700',},
  input: {  height: 40,  margin: 12,  borderWidth: 1,},
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    //backgroundColor:'rgba(0,0,0,0.9)'
  },
});


//---main---function-------
const LoginScreen = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};
  const [emailAddress,setEmailAddress]=useState("")
  const [password,setPassword]=useState("")

  const checkPreviousLogin=async()=>{
    var userData = await checkSyncData()
    if(userData!=false){
      props.navigation.navigate("HomeScreen")
    }
  }

  useEffect(function(){
    checkPreviousLogin()
  },[])

  const handleClick=async()=>{
    alert(emailAddress+","+password)
    const body = {  emailid:emailAddress, password:password };
    var result = await postData('userdetail/chkloginative' , body);
    //alert('Record ....');
    if (result.result) {
      alert('login Successfull....');
      storeDatasync(result.data.mobile, result.data)
      props.navigation.navigate("HomeScreen")
    } else {
      alert('login UnSuccessfull....');
    }
    //props.navigation.navigate("HomeScreen")
  }

  //---------------for signup-----------------------
  const [emailid, setemailid] = useState(" ");
  const [mobile, setmobile] = useState(" ");
  const [name, setname] = useState(" ");
  const [newpassword, setnewpassword] = useState(" ");
  const [userdp,setuserdp] = useState({bytes:'', file:'./images/alice.jpg'});
  const handlesubmitform = async()=>{
    //alert( emailid+ " " + mobile + " " +name + " " +newpassword)
    var formdata = new FormData()
    formdata.append('email',emailid)
    formdata.append('mobile',mobile)
    formdata.append('firstname',name)
    formdata.append('password',newpassword)
    formdata.append('address_status','null')
    formdata.append('userdp',   {
      name:  " xbcd "+userdp.assets[0].fileName,
      uri:userdp.assets[0].uri,
      type:userdp.assets[0].type
    }// userdp.assets[0].uri
    )
    console.log("userdp bytes" ,userdp.assets[0])
    //const body = {  email:emailid,  mobile:mobile,  firstname:name,  lastname:name,  password:newpassword, address_status:'null'};
    //var result = await postData('userdetail/newuser' , body);
    var config={headers:{"content-type":"multipart/form-data"}}
    var result=await postDataImage("userdetail/newuser",formdata,config)
    //alert('Record ....');
    if (result.result) {
      alert('Record Submitted....');
    } else {
      alert('Fail to Submit Record...');
    }
  }
  const [imageselect, setimageselect] =useState(false)
  handleChoosePhoto = () => {
    console.log('in the uri i am')
    const options = {
      noData: true,
    }
    launchImageLibrary(options, response => {
      if (response) {
        setuserdp(response)
        console.log("in uri",response)
        setimageselect(true)
      }
      else{
        console.log('not get response uri')
      }
    })
  }
  const refRBSheet = useRef();
  const SignupForm=()=>{
   return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        paddingLeft:15, paddingRight:15,
      }}
    >
     
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={600}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{  paddingLeft:25, paddingRight:25,}}>
        <View>
        <Text style={{ fontWeight: 'bold' , textAlign:'center', fontSize:25 , marginTop:20,marginBottom:10 }}> Sign Up  </Text>
        </View>
            <View>
            <Button title="Choose Photo" onPress={()=>handleChoosePhoto()} />
            {imageselect? <><Image
              source={{ uri: userdp.assets[0].uri }}
              style={{ width:40, height:20 }}
            /></>:<></>}
            
            </View>
            <View >
              <Input placeholder="Email Address" placeholderTextColor="#000" 
                underlineColor="#000" leftIcon={<FA name="envelope" size={16} color={'#000'} />}
                onChangeText={(txt)=>setemailid(txt)}
              />
            </View>

            <View >
              <Input    placeholder="Mobile Number"  placeholderTextColor="#000"
                underlineColor="#000"  leftIcon={<FA name="mobile" size={20} color={'#000'} />}
                onChangeText={(txt)=>setmobile(txt)}
              />
            </View>

            <View >
              <Input    placeholder="Your Name"  placeholderTextColor="#000"
                underlineColor="#000"  leftIcon={<FA name="user" size={20} color={'#000'} />}
                onChangeText={(txt)=>setname(txt)}
              />
            </View>
    
            <View >
              <Input  placeholder="Password"  placeholderTextColor="#000"
                underlineColor="#000"  secureTextEntry={true}  leftIcon={<FA name="key" size={16} color={'#000'} />}
                onChangeText={(txt)=>setnewpassword(txt)}
              />
            </View>
            <View >
              <Input  placeholder=" Confirm Password"  placeholderTextColor="#000"
                underlineColor="#000"  secureTextEntry={true}  leftIcon={<FA name="key" size={16} color={'#000'} />}
              />
            </View>

            <View >
              <TouchableOpacity onPress={()=>handlesubmitform()}>
              <View style={{ borderRadius: 25, padding: 10, backgroundColor: '#182C61', alignSelf: 'center', 
                              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                <Text style={{   alignSelf: 'center',   fontSize: 20,   fontWeight: 'bold',   color: '#FFF',   marginRight: 5, }}>
                  Submit
                </Text>
                <FA name="save" size={20} color="#FFF" />
              </View>
              </TouchableOpacity>
            </View>
          </View>
      </RBSheet>
    </View>
  );  
}

  return (
    <View > 
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./images/vback2.jpg')}>
        {/*<View style={{marginTop: 20}}>
          <Image
            resizeMode={'contain'}
            style={{width: 40, height: 60, marginLeft: 30}}
            source={require('./images/vback.jpg')}
          />
        </View>*/}
        <View style={{width: width * 0.8, alignSelf: 'center', marginTop: 2}}>
          <Text style={{fontSize: 35, color: '#FFF', fontWeight: 'bold'}}>
            
          </Text>
        </View>
        <View style={{width: width * 0.85, alignSelf: 'center', marginTop: 20}}>
          <View style={{ width: width * 0.85, height: height * 0.5, backgroundColor: '#FFF', 
                        borderTopRightRadius: 70, borderBottomLeftRadius: 70, borderTopLeftRadius: 10,
                        borderBottomRightRadius: 10, }}>
            <View style={{width: width * 0.8, marginTop: 10}}>
              <Text style={{  fontSize: 22,  borderBottomWidth: 0.5,  alignSelf: 'center',  fontWeight: 'bold',}}>
                Login
              </Text>
            </View>

            <View style={{width: width * 0.8, marginTop: 30}}>
              <Input onChangeText={txt => setEmailAddress(txt)}
                   placeholder="Mobile Number" placeholderTextColor="#000" underlineColor="#000"
                leftIcon={<FA name="mobile" size={25} color={'#000'} />}
              />
            </View>

            <View style={{width: width * 0.8, marginTop: 30}}>
              <Input onChangeText={txt => setPassword(txt)}
                placeholder="Password" placeholderTextColor="#000" underlineColor="#000" secureTextEntry={true}
                leftIcon={<FA name="key" size={16} color={'#000'} />}
              />
            </View>

            <View
              style={{width: width * 0.8, marginTop: 20, alignSelf: 'center'}}>
              <TouchableOpacity onPress={()=>handleClick()}>
              <View style={{ borderRadius: 25, padding: 10, width: width * 0.5, backgroundColor: '#182C61', alignSelf: 'center',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
                }}>
                <Text style={{   alignSelf: 'center',   fontSize: 20,   fontWeight: 'bold',   color: '#FFF',   marginRight: 5, }}>
                  Login
                </Text>
                <MI name="login" size={20} color="#FFF" />
              </View>
              </TouchableOpacity>
            </View>

            <View style={{  width: width * 0.8,  marginTop:10, display: 'flex',  flexDirection: 'row',}}>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Text style={{   fontSize: 14,   fontWeight: 'bold',   color: '#4834d4',   padding: 5,   marginLeft: 25, }}>
                  Signup
                </Text>
              </TouchableOpacity>

              <Text style={{   fontSize: 14,   fontWeight: 'bold',   color: '#4834d4',   padding: 5,   marginLeft: 'auto', }}>
                Forgot Password
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      {/*<Text style={{ fontWeight: 'bold' , textAlign:'center', fontSize:25 , marginTop:30 }}> Log In </Text>
      <TextInput  style={styles.input}  
      onChangeText={(txt)=>setEmailAddress(txt)}
      //value={number}
      placeholder=" User Name.. " 
      />

      <TextInput  style={styles.input}  
      onChangeText={(txt)=>setPassword(txt)}
      //value={number}
      placeholder=" Password.. "  secureTextEntry={true}
      />
      <View style={{ margin:10 }}>
      <Button
        onPress={()=>handleClick()}
        title="Log In"
        color="#841584"
        
        //accessibilityLabel="Learn more about this purple button"
      />
      <View>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#4834d4',
                    padding: 5,
                    marginLeft: 25,
                  }}>
                  Signup
                </Text>
              </TouchableOpacity>
              </View>
      </View>*/}
                {SignupForm()} 
    </View>
    
  );
};



export default LoginScreen;
