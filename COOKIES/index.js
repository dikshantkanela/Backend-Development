const express = require("express");
const app = express();

app.get("/greet",(req,res)=>{
    res.send("HELLO")
})

app.get("/setname",(req,res)=>{
    res.cookie("car","BMW M340i");
    res.cookie("bike","RE GT 650");
    res.clearCookie("name") // removes a cookie
    res.cookie("friend","Aryan",{httpOnly:true,secure:true,sameSite:true,maxAge:3000})
    res.send("SENT A COOKIE!");
})

app.listen(3000,()=>{
    console.log("Live on port 3000");
})