const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session")
//REQ BODY : 
app.use(express.urlencoded({extended:true}));
// EJS : 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
//SESSIONS: 
app.use(session({secret:'notagoodsecret',resave:false,saveUninitialized:true}))
//MONGOOSE : 
mongoose.connect('mongodb://127.0.0.1:27017/authDemo',{useNewUrlParser:true,useUnifiedTopology:true}) //Connects mongoose with mongodb //.connect returns a Promise!
   .then(()=>{
    console.log("MONGOOSE CONNECTION OPEN!!");
   })
   .catch((err)=>{
    console.log("OHH NO MONGOOSE ERROR!!!");
    console.log(err);
   })

const checkLogin = (req,res,next)=>{
    if(!req.session.user_id){
       return res.redirect("/login");
    }
    next();
}
// USER MODEL :
const User = require("./models/user");
app.get("/",(req,res)=>{
    res.send("HOME!")``
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
    req.session.user_id = user._id
    res.redirect("/secret")
})
app.get("/login",(req,res)=>{
    res.render("login.ejs")
})
app.post("/login",async (req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username:username}); //username should be unique
    const authenticateUser = await bcrypt.compare(password,user.password);
    if(authenticateUser){
        // IF THE USER IS AUTHENTIC, THEN STORE HIS user._id IN THE SESSION's session.user_id ATTRIBUTE
        req.session.user_id = user._id;
        res.redirect("/secret")
    } else{
        res.send("TRY AGAIN!");
    }
})
app.post("/logout",(req,res)=>{
    req.session.destroy(); // removes the entire session    
    res.redirect("/login")
})
app.get("/secret",checkLogin,(req,res)=>{
    res.render("secret.ejs");
   
})
app.get("/topsecret",checkLogin,checkLogin,(req,res)=>{
    res.send("TOP SECRET");
   
})
app.listen(3000,()=>{
    console.log("App is live on port 3000")
})