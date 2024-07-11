const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

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

app.get("/rand",(req,res)=>{
    const num = Math.floor(Math.random()*10)+1
    res.render("rand.ejs",{temp:num}) //temp will be available in the rand.ejs file
})
app.listen(port,()=>{
    console.log("Server live on the port ", port)
})