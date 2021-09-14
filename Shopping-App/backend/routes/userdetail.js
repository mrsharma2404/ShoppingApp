var express = require('express');
var router = express.Router();
var pool=require('./pool');
var upload=require('./multer')


router.post('/newuser',upload.single('userdp'),function(req,res){
    console.log(req.body, req.file)
    pool.query("insert into user (mobile, email, firstname,  password ,address_status, image) values(?,?,?,?,?,?) ",[req.body.mobile, req.body.email, req.body.firstname,  req.body.password, req.body.address_status,req.file.originalname],function(err,result){
        if(err)
        {
            console.log(err)
          return res.status(500).json({result:false})
      
        }
        else   
        {
            return res.status(200).json({result:true})
        }
  
    })
});

router.post('/chkloginative',function(req,res){
    pool.query("select * from user where email=? and password=? ",[req.body.emailid, req.body.password],function(err,result){
    if(err)
    {
     res.status(500).json({result:false ,data:[]})
     console.log(err)
    }
    else
    {   if(result.length==1)
        {
            res.status(200).json({result:true, data:result[0]})
        }
        else
        {
            //console.log(result)
            res.status(200).json({result:false ,data:[]})
        }
       
       //console.log(result[0])
    }
    })
});
module.exports=router;