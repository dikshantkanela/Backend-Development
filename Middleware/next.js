const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev")); //tells status of any req/response

app.use((req,res,next)=>{
    console.log("First Middleware"); //console log me koi panga nhi h but res.send me sirf ye chalega aur kuch match hoye na hoye doesnt matter
    next(); //call for the next middleware or any route handler that matches with request
})

app.use((req,res,next)=>{
    console.log("Second Middleware");
    next();   //call for the next middleware or any route handler that matches with request
})

app.use((req,res,next)=>{
    console.log("Third Middleware");
    next();  //call for the next middleware or any route handler that matches with request
})

app.use("/dogs",(req,res,next)=>{  //route dependant middleware
    console.log("Doggo Middleware")
    next();
})
app.get("/", (req,res)=>{
   res.send("Home Page");
});

app.get("/dogs", (req,res)=>{
    res.send("WOOF WOOF");
});


app.listen(8080,()=>{
    console.log("APP IS LIVE ON PORT 8080!");
} )