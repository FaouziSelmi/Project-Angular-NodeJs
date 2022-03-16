const { query } = require('express');
const express=require('express');
const router= express.Router();

const dbConnection= require('../connection/connection');



router.get('/users', (req,res) =>{
    dbConnection.query('select * from users', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});
router.delete('/users', (req,res) =>{
    dbConnection.query('delete from users where identifiant=?', req.body.id, (err, rows, fields)=>{
        if(!err){
          // res.send(" recode data supprimé"); erreur parsing json response
        res.status(201).send({message: 'delete successfully'});
           
            
        }else{
            console.log(err);
        }
    })
});
router.put('/users',  (req, res)=> {
    dbConnection.query('UPDATE `users` SET `nom`=?,`prenom`=?,`email`=?,`password`=? ,`idDir`=?,`roleuser`=? where `identifiant`=?',
        [req.body.nom,req.body.prenom, req.body.email,req.body.password, req.body.idDir, req.body.roleuser, req.body.identifiant], 
        function (error, results, fields) {
       if (error){
        console.log(error) ;
       } else{
       // res.status(201).send({message: 'Updated successfully'});
      res.send(JSON.stringify(results));
       }
      });
    });
module.exports=router;