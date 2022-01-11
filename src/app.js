const express = require("express");
// add db coonection
require("./db/conn");
// add model
const Student = require("./models/students");
const studentRouter = require("./routes/student.routes");
const app = express();
const port= process.env.PORT || 8000;
// convert req.body object to json object / it is a middelware
app.use(express.json());
app.use(studentRouter);

// app.get("/", (req,res)=>{
//     res.send("Welcome user 2022");
// })
// create new student
// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     // promise - then & catch
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
//     // res.send("Hello");
// })

// 1 create a router
// const router = new express.Router();

// 2 define the router
// router.get("/hem",(req,res) => {
//     res.send("hello");
// })

// 3 register the router
// app.use(router);


// step 1 & 2 seperate in 

// asyn & await
// app.post("/students",async(req,res)=>{
//     try{
//         const user = new Student(req.body);
//         const createUser =await user.save();
//         res.status(201).send(createUser);
//     }
//     catch(e){
//         res.status(400).send(e);
//     }
  
// })

// read data from collection
// app.get("/students", async(req,res)=>{
//     try{
//         const studentsData = await Student.find();
//         res.send(studentsData);
//     }
//     catch(e){
//         res.send(e);
//     }
// })

// read single data from collection
// app.get("/students/:id", async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         // console.log(_id.id);
//         // res.send(_id.id);
//         // if _id : _id than write only one
//         // Student.findById({_id:_id});
//         const studentData = await Student.findById(_id);
//         console.log(studentData);
//         if(!studentData){
//             return res.status(404).send();
//         }
//         else{
//            res.send(studentData);
//         }
//     }
//     catch(e){
//         res.status(500).send(e);
//     }
// })

//  delete student data

// app.delete("/students/:id", async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         // console.log(_id);
//         const deleteStudent = await Student.findByIdAndDelete(_id);
//         if(!_id)
//         {
//             return res.status(404).send();
//         }
//         else{
//             res.send(deleteStudent);
//          }
//     }
//     catch(e)
//     {
//         res.status(500).send(e);
//     }
// })

// update students
// app.patch("/students/:id", async(req,res)=>{
//    try{
//         const _id = req.params.id;
//         // console.log(_id);
//         const updateStudent = await Student.findByIdAndUpdate(_id, req.body,{new:true});
//         res.send(updateStudent);
//    }
//    catch(e){
//     res.status(404).send(e);
//    }
// })
// update by email id
// app.patch("/students/:email", async(req,res)=>{
//     try{
//          const email = req.params.email;
//         //  console.log(email);
//          const updateStudent = await Student.findOneAndUpdate({email : email}, req.body,{new:true});
//          res.send(updateStudent);
//     }
//     catch(e){
//      res.status(404).send(e);
//     }
//  })

app.listen(port, ()=>{
    console.log(`connection is setup on port ${port}`);
});
