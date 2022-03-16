const express=require("express");
const app= express();
const bodyparser=require("body-parser");
const cors=require("cors");

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
var corsOptions = {
    origin: "http://localhost:4200"
  };
app.use(cors(corsOptions));


 const userRoute=require("./api/routes/pages");
app.use('/',userRoute);

app.listen('3000',()=> console.log('express server running at port no: 3000 '));


