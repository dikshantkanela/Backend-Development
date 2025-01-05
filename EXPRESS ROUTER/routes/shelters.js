const express = require("express");
const router = express.Router();

router.param('id', (req, res, next, id) => {
    req.shelterId = id; // param middleware
    next();
  });
  
  router.get('/user/:id', (req, res) => {
    res.send();
  });

router.get("/",(req,res)=>{
    res.send("HOME PAGE");
})

router.get("/:id",(req,res)=>{
    res.send(`User ID: ${req.shelterId}`);
})

router.post("/",(req,res)=>{
    res.send("CREATE A SHELTER");
})

router.get("/:id/edit",(req,res)=>{
    res.send("EDIT A SHELTER");
})

module.exports = router;