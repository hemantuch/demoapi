const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// 2 define the router
// router.get("/hem",(req,res) => {
//     res.send("hello");
// });


router.post("/students",async(req,res)=>{
    try{
        const user = new Student(req.body);
        const createUser =await user.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }
  
})

router.get("/students", async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }
    catch(e){
        res.send(e);
    }
})

router.get("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
       
        const studentData = await Student.findById(_id);
        console.log(studentData);
        if(!studentData){
            return res.status(404).send();
        }
        else{
           res.send(studentData);
        }
    }
    catch(e){
        res.status(500).send(e);
    }
})

router.delete("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        // console.log(_id);
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!_id)
        {
            return res.status(404).send();
        }
        else{
            res.send(deleteStudent);
         }
    }
    catch(e)
    {
        res.status(500).send(e);
    }
})

router.patch("/students/:email", async(req,res)=>{
    try{
         const email = req.params.email;
        //  console.log(email);
         const updateStudent = await Student.findOneAndUpdate({email : email}, req.body,{new:true});
         res.send(updateStudent);
    }
    catch(e){
     res.status(404).send(e);
    }
 })

// export router module
module.exports = router;