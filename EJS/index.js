const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const redditData = require("./data.json")  //import the json data

console.log(redditData)

//HOW TO SERVE STATIC CSS OR JS FILES:-
app.use(express.static(path.join(__dirname,'public')));


// Other Code : 
app.set("view engine","ejs") // this requires ejs
app.set("views",path.join(__dirname,"/views")) // so that we can run ejs file from anywhere 
app.get('/',(req,res)=>{
    res.render("home.ejs")   //render will render a page instead of a plain text
}
)
app.get("/cars",(req,res)=>{
    const cars = ["Virtus GT","Vento", "Octavia", "Accord", "Jetta"]
    res.render("cars.ejs", {cars});
})

app.get("/r/:subreddit",(req,res)=>{
    const {subreddit} = req.params;
    const data  = redditData[subreddit]  //json data object me subreddit key match hogi aur data print
    console.log(data)
    if(data){
        res.render("subreddit.ejs",{...data})  //spreading the data object so that we can directly access var names of obj in ejs file
    }
    else{
        res.send("Subreddit not found in the database!")
    }
})
app.get("/rand",(req,res)=>{
    const num = Math.floor(Math.random()*10)+1
    res.render("rand.ejs",{temp:num}) //temp will be available in the rand.ejs file
})
app.listen(port,()=>{
    console.log("Server live on the port ", port)
})