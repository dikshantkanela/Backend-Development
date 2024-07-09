const express = require("express");
const app = express();  //creating an express app 
// console.dir(app);
const port = 3000;


app.listen(port,()=>{
    console.log("Server is live on port 3000");   //set up a basic server
})

// app.use((req,res)=>{
//     console.log("WE GOT A NEW REQUEST!")   //runs whenever some one hits a request on the server
//     // res.send("<h1>DIKSHANT KANELA</h1>")
// })

app.get("/",(req,res)=>{
    res.send("<<HOME PAGE>>");
})

app.get("/r/:subreddit",(req,res)=>{
    // console.log(req.params); //object
    // res.send("This is a sub reddit!");
    const {subreddit} = req.params; //params is an object and we destructure it 
    res.send(`You are browsing the ${subreddit} subreddit`)
})

app.get("/r/:subreddit/:postId",(req,res)=>{  //subreddit and postid are parameters of the path format!
   const {subreddit,postId} = req.params;
   res.send(`Viewing Post ID ${postId} on the ${subreddit} subreddit! `)
})

app.get("/cats",(req,res)=>{
    res.send("MEOW!");
})

app.get("/dogs",(req,res)=>{
    res.send("WOOF");
})

app.get("*",(req,res)=>{    // for any other route!
    res.send("I don't know that route!");
})
