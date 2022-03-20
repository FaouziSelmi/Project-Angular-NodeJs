const mysql=require('mysql');
const dotenv=require("dotenv");
dotenv.config({path: 'api/connection/.env'});
const dbConnection= mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    debug: false,
    multipleStatements: true
});

 dbConnection.connect((err)=>{
    if(err){
        console.log("connection failed error: " + err);
    }else{
        console.log("connection database succssefuly");
    }
});

module.exports=dbConnection;