import {useHistory} from 'react-router-dom'

//var ServerURL="http://10.0.3.2:3000" //this is for mobile connectivity for react js
//var ServerURL="http://localhost:5000"   //this is for react js
var ServerURL="http://10.0.2.2:3000"   //this is for react native
var axios=require('axios')


var history = useHistory


const getData=async(url)=>{
    try
    {
        var response=await fetch(`${ServerURL}/${url}`,
        {
            method: "GET",      
            headers: {  "Content-Type": "application/json;charset=utf-8",},
          });
        const result=await response.json()
        return result    
    }
    catch(e)
    {
        return null
    }
}

const postData=async(url, body)=>{
    try
    {   
        const response = await fetch(`${ServerURL}/${url}`, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json;charset=utf-8",},
            body: JSON.stringify(body),
          });
        const result = await response.json();
        return result;
    }
    catch(e){     console.log(e)
        return null
    }
}


const postDataImage=async(url, formData, config)=>{
    try
    {   
        //do chane here
        const response = await axios.post(`${ServerURL}/${url}`, formData, config)             
        const result = await response.data
        return result;  
       
    }
    catch(e)
    {
        console.log(e)
        return null
    }
}



export {getData, postData, postDataImage, ServerURL}