const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./AppError");
app.use(morgan("dev")); //tells status of any req/response

app.use("/dogs", (req, res, next) => {
    const { password } = req.query;
    if (!password) {
    return next(new AppError("Password is Required!",401)); // Throwing error middleware if password is missing
    }
    if (password === "sureshotfake") {
      next(); //execute non-error middleware
    } else {
     return next(new AppError("Invalid password", 401)); // Throwing error middleware for invalid password
    }
  });
  

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/dogs", (req, res) => {
  console.log(req.reqTime); //tells when the req was made
  res.send("WOOF WOOF");
});

app.get("/error", (req, res) => {
  dog.woof();
});
// BASIC ERROR HANDLER MIDDLEWARE : has 4 parameters!
// app.use((err,req,res,next)=>{
//    console.log("***********************");
//    console.log("ERROR");
//    console.log("***********************");
//    next(err);
// });

app.use((err, req, res, next) => {
  const {status=500, message = "Something went wrong"} = err; //dest the err object of computer based on our custom error class that will match
  console.log( err.message)
  res.status(status).send(message); 
});

app.listen(3000, () => {
  console.log("APP IS LIVE ON PORT 3000!");
});
