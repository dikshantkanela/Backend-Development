const express = require("express");
const router = express.Router();

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next(); 
    }   //this middleware will be used everytime for the admin routes
    res.send("SORRY YOU ARE NOT AN ADMIN")
})

router.get("/topsecret", (req, res) => {
  res.send("SHHHHHHHH");
});

router.get("/deleteeverything", (req, res) => {
  res.send("DELETED!");
});

module.exports = router;
