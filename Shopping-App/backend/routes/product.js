var express = require('express');
var router = express.Router();
var pool=require('./pool');


router.get('/productlist',function(req,res){
    pool.query("select * from product ",function(err,result){
    if(err)
    {
     res.status(500).json({result:false ,data:[]})
     console.log(err)
    }
    else
    {  
        res.status(200).json(result)
       // console.log(result)
    }
    })
});
module.exports=router;