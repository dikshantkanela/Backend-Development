const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev")); //tells status of any req/response

app.use((req,res,next)=>{
   req.reqTime = Date.now();
   console.log(req.method, req.path,res.status); //our custom shit
   next();
});

app.get("/", (req,res)=>{
   res.send("Home Page");
});

app.get("/dogs", (req,res)=>{
    console.log(req.reqTime); //tells when the req was made
    res.send("WOOF WOOF");
});
 
app.use((req,res)=>{   //IF USER ENTERED STUPID URL ROUTES
    res.status(404).send("NOT FOUND!");
}); 

app.listen(3000,()=>{
    console.log("APP IS LIVE ON PORT 3000!");
} )