const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev")); //tells status of any req/response

app.get("/", (req,res)=>{
   res.send("Home Page");
});

app.get("/dogs", (req,res)=>{
    res.send("WOOF WOOF");
});

app.use((req, res) => {
    console.log("THIS WILL EXECUTE ON ANY REQUEST IF NO OTHER ROUTES MATCH");
    res.send("Page Not Found");  // Handle unmatched routes
});

app.listen(3000,()=>{
    console.log("APP IS LIVE ON PORT 3000!");
} )