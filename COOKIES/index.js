const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("mysecretsign")); //cookie parsing middleware for express (req.cookies)

app.get("/greet",(req,res)=>{
    console.log(req.cookies);
    const {name} = req.cookies; // cookies are independent of routes, once they are sent they will be sent on every request!
    res.send(`Hello, ${name}`);
})

app.get("/setname",(req,res)=>{
    res.cookie("name","Dikshant")
    res.cookie("car","BMW M340i");
    res.cookie("bike","RE GT 650");
    // res.clearCookie("name") // removes a cookie
    res.cookie("friend","Aryan",{httpOnly:true,secure:true,sameSite:true,maxAge:3000})
    res.send("SENT A COOKIE!");
})

app.get("/signedcookie",(req,res)=>{
   res.cookie("fruit","orange",{signed:true}); //send a signed-cookie
//    res.clearCookie("fruit")
   res.send("GOT YOUR SIGNED FRUIT?");
})

app.get("/verifyfruit",(req,res)=>{
    res.send(req.signedCookies) //SIGNED COOKIES KE LIYE ALAG
    console.log(req.cookies) // BAAKI ALAG HAIN!
})

app.listen(3000,()=>{
    console.log("Live on port 3000");
})