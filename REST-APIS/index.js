const express = require("express");
const app = express();
const path = require('path');

app.set("view engine","ejs");  //TO SET UP EJS
app.set("views",path.join(__dirname,"views"));

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
    id:1,
    username:"Dikshant",
    comment:"I love Billu"
  },
  {
    id:2,
    username:"Manan",
    comment:"I love cats"
  },
  {
    id:3,
    username:"Aryan",
    comment:"Why are you running?"
  },
  {
    id:4,
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
  comments.push({username,comment})   // THIS WILL CREATE A NEW COMMENT --> COMMENTS OBJECT WILL HAVE A NEW MEMBER !
  // res.send("IT WORKS!");  

  res.redirect("/comments")   //REDIRECT TO THE COMMENT PATH JUST AFTER ADDING A NEW COMMENT
})

app.get("/comments/:id",(req,res)=>{
  const {id} = req.params;
  if( comment = comments.find((c)=>c.id === parseInt(id))){
    res.render("comments/show.ejs", {...comment});  //PASSING THE COMMENT to EJS  
  }
  else{
    res.send("Comment not found")
  }
 
})


app.listen(4000, () => {
  console.log("Server Live on Localhost 4000 ");
});
