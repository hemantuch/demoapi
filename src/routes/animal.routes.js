const express = require("express");
const router = new express.Router();
const Animal = require("../models/animals.model");
const User = require("../models/user.model");

router.post("/animals",async(req,res)=>{
    try{
        const animalsData = new Animal(req.body);
        const createAnimal =await animalsData.save();
        res.status(201).send(createAnimal);
    }
    catch(e){
        res.status(400).send(e);
    }  
})

router.get("/animals", async(req,res)=>{
    try{
        const animalsData = await Animal.find();
        console.log(animalsData);
        // console.log(animalsData.imageofanimal.frontimg);
        res.send(animalsData);
    }
    catch(e){
        res.send(e);
    }
})

router.get("/animals/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
            
        const AnimalId = await Animal.findById(_id);
        // console.log(userDataId);
        if(!AnimalId){
            return res.status(404).send();
        }
        else{
           res.send(AnimalId);
        }
    }
    catch(e){
        res.status(500).send(e);
    }
})

router.delete("/animals/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        // console.log(_id);
        const deleteAnimal = await Animal.findByIdAndDelete(_id);
        if(!_id)
        {
            return res.status(404).send();
        }
        else{
            res.send(deleteAnimal);
         }
    }
    catch(e)
    {
        res.status(500).send(e);
    }
})

router.patch("/animals/:id", async(req,res)=>{
    try{
         const id = req.params.id;
         const updateAnimal = await Animal.findOneAndUpdate({id : id}, req.body,{new:true});
         res.send(updateAnimal);
    }
    catch(e){
     res.status(404).send(e);
    }
 })

 router.post("/registration", async(req,res) => {
    try{
              
        const UserData = new User(req.body);
        const createUser =await UserData.save();
        res.status(201).send(createUser);
        
    }
    catch(e){
        res.status(404).send(e);
    }
});

// export router module
module.exports = router;