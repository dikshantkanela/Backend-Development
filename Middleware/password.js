const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev")); //tells status of any req/response

app.use("/dogs",(req,res,next)=>{
   const {password} = req.query //query means anything in URL after "?"
   if(password==="sureshotfake"){
    next();
   }
   else{
    res.send("Enter password!");
   }
  
});

app.get("/", (req,res)=>{
   res.send("Home Page");
});

app.get("/dogs", (req,res)=>{
    console.log(req.reqTime); //tells when the req was made
    res.send("WOOF WOOF");
});

app.use((req,res)=>{
    res.status(404).send("NOT FOUND!");
}); 



app.listen(3000,()=>{
    console.log("APP IS LIVE ON PORT 3000!");
} )