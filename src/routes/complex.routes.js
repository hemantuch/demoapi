const express = require("express");
const router = new express.Router();
const User = require("../models/complex.model");

router.post("/usersdata",async(req,res)=>{
    try{
        const user = new User(req.body);
        const createUser =await user.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }
  
})
router.get("/usersdata", async(req,res)=>{
    try{
        const usersData = await User.find();
        res.send(usersData);
    }
    catch(e){
        res.send(e);
    }
})

router.delete("/usersdata/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        // console.log(_id);
        const deleteUser = await User.findByIdAndDelete(_id);
        if(!_id)
        {
            return res.status(404).send();
        }
        else{
            res.send(deleteUser);
         }
    }
    catch(e)
    {
        res.status(500).send(e);
    }
})



module.exports = router;