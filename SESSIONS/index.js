const express = require("express");
const app = express();
const session = require("express-session");

// SESSION MIDDLEWARE : 
app.use(session({secret:"thisisnotagoodsecret",resave:false,saveUninitialized:false}));

app.get("/viewcount",(req,res)=>{
    if(req.session.count){ //session object is there already but the .count is not there we are creating on our own to count the no of visits in the website
        req.session.count += 1;
    }
    else{
        req.session.count = 1;
    }

    res.send(`You have viewed this page ${req.session.count} times!`);
})

app.get("/register",(req,res)=>{
    const {username = "Anyonymous"} = req.query; // username dubara khud se hi banaya hai iss barr query object mein
    req.session.username = username; //session me bhi bana daaala!
    res.redirect("/greet");
})

app.get("/greet",(req,res)=>{
    res.send(`Welcome, Mr. ${req.session.username}`)
})

app.listen(3000,()=>{
    console.log('Live on port 3000');
})