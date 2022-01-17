require('dotenv').config();
const express = require("express");
const bcrypt= require("bcrypt");
// const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const path = require("path");
require("./db/conn4");
const User = require("./models/emp.model");

const app = express();
// const { json } = require("express");
const port= process.env.PORT || 8000;
const securePassword = async(password)=>{
    const hashPassword = await bcrypt.hash(password,10);
    console.log(hashPassword);

    const matchPassword = await bcrypt.compare(password,hashPassword);
    console.log(matchPassword);
}
securePassword("123");

 app.use(express.urlencoded({extended:true}));
// app.use(express.json());

//  website static
// console.log(__dirname);
// console.log(path.join(__dirname,"/public"));
const staticpath = path.join(__dirname,"/public")
app.use(express.static(staticpath));

// to set the view engine
app.set("view engine","hbs");
// template enginee root
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/register",async(req,res)=>{
    try{
       const registerEmp= new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,

    })
    console.log(registerEmp);
    // token middelware
    const token = await registerEmp.generateAuthToken();
    // password hash by middelware
     const reg = await registerEmp.save();
     res.status(201).render("login");
    }
    catch(e){
        res.send(e);
    }
  
});

app.post("/login",async(req,res)=>{
    try{       
       const  email= req.body.email;
       const  password= req.body.password;    
    //    console.log(`${email} and ${password}`);

       const userInfo = await User.findOne({ email : email});
       const isMatch = await bcrypt.compare(password,userInfo.password);
       
       const token = await userInfo.generateAuthToken();
       console.log(token);
    //    return token;
       

    //    if(userInfo.password === password)
       if(isMatch)
       {
        res.status(201).render("welcome");
        // res.send(userInfo);
        // console.log(userInfo);
       }
       else{
           res.send("Invalid login details");
       }   
    }
    catch(e){
        res.status(400).send("Invalid login details");
    }
  
});

app.get("/jwt",(req,res)=>{
    const createToken = async () =>{
        const jwtToken = await jwt.sign({_id:"61e525cf992809b14732e510"}, "qwertyuioplkjhgfdsamnbvcxzqwerty",{expiresIn:"30 seconds"});
        console.log(jwtToken);
        const userVerify = await jwt.verify(jwtToken,"qwertyuioplkjhgfdsamnbvcxzqwerty");
        console.log(userVerify);

    }
    createToken();
    res.send("hi");
});
// app.get("/register",(req,res)=>{
//     res.render("register");
// });

// to run first write first either view engine or static path
// root

// app.get("/", function (req,res){
//     res.send("this is rout url");
// })
// about page
// app.get("/about",function(req,res){
//     // res.send("this is about page");
//     res.status(200).send("this is about page");

// })
// contact page
// app.get("/contact",function(req,res){
//     res.send("this is contact page");
// })
// // front page show
// app.get("/front",function(req,res){
//     // console.log(__dirname);
//     res.sendFile(__dirname+"/front.html");
// })

// after submit page show
// app.post("/front",function(req,res){
//     // res.send("welcome 2022");
//     // console.log(req.body);
//     let v1 = Number(req.body.n1);
//     let v2 = Number(req.body.n2);
//     let sum = v1 + v2; 
//     res.send("Sum of numbers is " +sum);
// })

// app.get("/bmi",function(req,res){
//     // console.log(__dirname);
//     res.sendFile(__dirname+"/bmi.html");
// })
// after submit page show
// app.post("/bmi",function(req,res){
//     let h = Number(req.body.h1);
//     let w = Number(req.body.w1);
//     let bmi = w / (h * h); 
//     res.send("Your BMI is " +bmi);
// })


app.listen(port, ()=>{
    console.log(`connection is setup on port ${port}`);
console.log(process.env.SECRET_KEY);

});