const express = require("express");
const router = new express.Router();
const User = require("../models/users");

// 2 define the router
// router.get("/hem",(req,res) => {
//     res.send("hello");
// });


router.post("/users",async(req,res)=>{
    try{
        const user = new User(req.body);
        const createUser =await user.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }
  
})

router.get("/users", async(req,res)=>{
    try{
        const usersData = await User.find();
        res.send(usersData);
    }
    catch(e){
        res.send(e);
    }
})

router.get("/users/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        // console.log(_id);       
        const userDataId = await User.findById(_id);
        // console.log(userDataId);
        if(!userDataId){
            return res.status(404).send();
        }
        else{
           res.send(userDataId);
        }
    }
    catch(e){
        res.status(500).send(e);
    }
})

router.delete("/users/:id", async(req,res)=>{
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

router.patch("/users/:email", async(req,res)=>{
    try{
         const email = req.params.email;
        //  console.log(email);
         const updateUser = await User.findOneAndUpdate({email : email}, req.body,{new:true});
         res.send(updateUser);
    }
    catch(e){
     res.status(404).send(e);
    }
 })

 router.post("/login", async(req,res) => {
    try{
        const email = req.body.email;
        const phone = req.body.phone;
        // const userData = await User.find({email});
        console.log(`${email} and phone no ${phone}`);
        console.log(email);
        const match= await User.findOne({email:email,phone:phone});
        res.send(match);
        console.log(match);

        
    }
    catch(e){
        res.status(404).send(e);
    }
});

 router.get("/logout", function (req, res) {
    res.redirect("/");
});

// export router module
module.exports = router;