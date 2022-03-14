const express=require('express');
const router= express.Router();

const dbConnection= require('../connection/connection');



router.get('/appmfpe', (req,res) =>{
    dbConnection.query('select * from users', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});
module.exports=router;