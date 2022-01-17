const mongoose= require("mongoose");
const validator = require("validator");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");

const empSchema = new mongoose.Schema({    
    name : {
        type :String,
        required:true,
        minlength:3
    },
    email: {
        type:String,
        required:true,
        unique:[true, "Email id is present"],
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid error");
            }
        }
    },
    password : {
        type :String,
        required:true,
        minlength:3
    },
    phone:{
        type:Number,
        unique:true,
        min:10,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    
})

// middelware for token and hash password
empSchema.methods.generateAuthToken = async function(){
    try{
        // console.log(this._id);
          const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
          this.tokens = this.tokens.concat({token:token});
        //   after oncatinate should save it
          await this.save();
          console.log(token); 
        //   return token;
    }
    catch(error){
        console.log("errror:" + error);
       res.send("errror:" + error);

    }
}

empSchema.pre("save", async function(next){
    if(this.isModified("password")){
        console.log(`the current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);        
        console.log(`the current password is ${this.password}`);
        next();
    }
  
})

const User = new mongoose.model('User',empSchema);
module.exports = User;
