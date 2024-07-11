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

app.get("/search",(req,res)=>{
    const {q} = req.query;   // user jo bhi ?q format me likhega uski value assign (q) ho jayegi req.query object me
    const {category} = req.query   // user jo bhi &category format me likhega uski value assign (category) ho jayegi req.query object me
    console.log(q,req.query);  //req.query is the whole query object which contains key and value pairs of the things entered by user in url after ?q!
    res.send(`Search results for ${q} in the category ${category}`)
})

app.get("*",(req,res)=>{    // for any other route!
    res.send("I don't know that route!");
})
