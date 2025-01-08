const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//REQ BODY : 
app.use(express.urlencoded({extended:true}));
// EJS : 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
//MONGOOSE : 
mongoose.connect('mongodb://127.0.0.1:27017/authDemo',{useNewUrlParser:true,useUnifiedTopology:true}) //Connects mongoose with mongodb //.connect returns a Promise!
   .then(()=>{
    console.log("MONGOOSE CONNECTION OPEN!!");
   })
   .catch((err)=>{
    console.log("OHH NO MONGOOSE ERROR!!!");
    console.log(err);
   })

// USER MODEL :
const User = require("./models/user");
app.get("/",(req,res)=>{
    res.send("REGISTERED!")
})
app.get("/register",(req,res)=>{
    res.render("register.ejs");
})
// USE TO STORE HASHED PASSWORDS IN OUR DB
app.post("/register",async(req,res)=>{
    const {username,password} = req.body;
    const hash = await bcrypt.hash(password,12)
    const user = new User({username:username,password:hash});
    await user.save();
    res.redirect("/")
})
app.get("/secret",(req,res)=>{
    res.send("You cannot see this unless you are LOGGED IN!")
})
app.listen(3000,()=>{
    console.log("App is live on port 3000")
})