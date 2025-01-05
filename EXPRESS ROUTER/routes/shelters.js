const express = require("express");
const router = express.Router();

router.get("/shelters",(req,res)=>{
    res.send("HOME PAGE");
})

router.get("/shelters/:id",(req,res)=>{
    res.send("VIEW A SHELTER");
})

router.post("/shelters",(req,res)=>{
    res.send("CREATE A SHELTER");
})

router.get("/shelters/:id/edit",(req,res)=>{
    res.send("EDIT A SHELTER");
})