const express = require("express");
const app = express();
const path = require('path');
const {v4:uuid} = require("uuid");  //to generate unique ids
const methodOverride = require("method-override") // for patch and delete reqs
app.set("view engine","ejs");  //TO SET UP EJS
app.set("views",path.join(__dirname,"views"));

app.use(methodOverride('_method')); //  for patch and delete reqs
app.use(express.urlencoded({ extended: true })); // to parse the data that is coming to the server through post req
app.use(express.json());  // to parse the data that is coming to the server in JSON through post req

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const{meat,qty} = req.body   //req.body is an object that contains all the data being POSTED to the server...
  res.send(`You order ${qty} quantities of ${meat} tacos `);
});

const comments = [
  {
    id:uuid(),
    username:"Dikshant",
    comment:"I love Billu"
  },
  {
    id:uuid(),
    username:"Manan",
    comment:"I love cats"
  },
  {
    id:uuid(),
    username:"Aryan",
    comment:"Why are you running?"
  },
  {
    id:uuid(),
    username:"Mayank",
    comment:"That is awesome"
  }
]
app.get("/comments",(req,res)=>{
  res.render("comments/index.ejs",{comments})    //INDEX ---> ALL COMMENTS DISPLAYED
})

// NOTE : FOR CREATING A NEW COMMENT FIRST WE HAVE TO CREATE A PATH for a FORM (GET REQ)
// THEN by SUBMITTING THAT FROM WE MAKE POST REQUEST!
app.get("/comments/new",(req,res)=>{    // DIRECTS to a FORM in WHICH WE CAN MAKE A COMMENT
  res.render("comments/new.ejs"); 
})

app.post("/comments",(req,res)=>{
  const {username,comment} = req.body;
  comments.push({username,comment,id:uuid()})   // THIS WILL CREATE A NEW COMMENT --> COMMENTS OBJECT WILL HAVE A NEW MEMBER !
   //ALSO A UNIQUE ID FOR EVERY NEW COMMENT 

  res.redirect("/comments")   //REDIRECT TO THE COMMENT PATH JUST AFTER ADDING A NEW COMMENT
})

app.get("/comments/:id",(req,res)=>{
  const {id} = req.params;
  if( comment = comments.find((c)=>c.id ===id )){
    res.render("comments/show.ejs", {...comment});  //PASSING THE COMMENT to EJS  
  }
  else{
    res.send("Comment not found")
  }
 
})

app.patch("/comments/:id",(req,res)=>{    //FOR UPDATING A COMMENT
   const {id} = req.params;
   const newCommentText = req.body.comment; //WHAT THE USER IS UPDATING IN PATCH REQ
   const foundComment = comments.find((c=>c.id === id)); //FINDS the comment of the entered ID
   foundComment.comment = newCommentText;   //UPDATES THE COMMENt 
   res.redirect("/comments")
  // res.send("PATCH REQUEST EDITS A COMMENT!")
})

app.listen(4000, () => {
  console.log("Server Live on Localhost 4000 ");
});
