const { query } = require('express');
const express=require('express');
const router= express.Router();

const dbConnection= require('../connection/connection');

/*---------------------------------------------------------------------------------------*/
const jwt=require('jsonwebtoken');
router.post('/login', (req,res)=>{
     //console.log(req.body);
    const{identifiant, password}=req.body;
   
    dbConnection.query('select * from users where identifiant=? and password=?',
     [identifiant,password], (err,rows,fields)=>{
         if(!err){
             //console.log(rows);
             if(rows.length >0){
              let data=JSON.stringify(rows[0]);
             const token= jwt.sign(data,'faouziselmi');
              res.json({token});
             }else{
                 res.json('userName ou bien password incorrect');
             }
         }else{
             console.log(err);
         }
     })
     
 })
 router.post('/test',verifyToken,(req,res)=>{
    console.log(req.data);
     res.json('Information secrete');
 })

  function verifyToken(req,res,next){
     if(!req.headers.authorization) return res.status(401).json('accès non autorisé');
     const token=req.headers.authorization.substr(7);
     //console.log(token);
     if (token !==''){
        const content= jwt.verify(token,'faouziselmi');
        //console.log(content);

        req.data=content;// a voir
        next();
     }else{
        res.status(404).json({msg: "Auth Failed"});
        
     }
 }



/*-----------------------------------------------------------------------------------------*/

router.get('/users', verifyToken,(req,res) =>{
    let sqlquery='select * from users U \
    inner join direction d \
    where U.idDir=D.idDir; select * from direction';
    dbConnection.query(sqlquery, (err, rows, fields)=>{
        if(!err){
             res.json(rows);
           // res.json(rows[1]);
           
        }else{
            console.log(err);
        }
    })
});

router.post('/users', verifyToken,(req, res)=> {
    sqlquery=`insert into users(identifiant,nom,prenom,email,password,idDir,roleuser) values
    ("${req.body.identifiant}","${req.body.nom}","${req.body.prenom}","${req.body.email}",
    "${req.body.password}","${req.body.idDir}","${req.body.roleuser}")`;
    dbConnection.query(sqlquery, (err, result)=> {
      if (err) throw err;
     //res.send('data inserted successfully');
     res.status(201).send({message: 'data inserted successfully'});
    });
  });
router.delete('/users', verifyToken,(req,res) =>{
    dbConnection.query('delete from users where identifiant=?', req.body.id, (err, rows, fields)=>{
        if(!err){
          // res.send(" recode data supprimé"); erreur parsing json response
        res.status(201).send({message: 'delete successfully'});        
        }else{
            console.log(err);
        }
    })
});
router.put('/users', verifyToken, (req, res)=> {
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