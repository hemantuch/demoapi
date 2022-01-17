const mongoose= require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    name : {
        type :String,
        required:[true, "Write your Name"],
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
    phone:{
        type:Number,
        unique:[true, "Duplicate Phone no"],
        min:10,
        required:true
    },
    address:{
        type:String,
        required:[true, "Write your Address"]
    }
})
// creating collection name- User
// it is a class and should be singular when it will run it would be plural 
const User = new mongoose.model('User',userSchema);
// after making collection export it
module.exports = User;
// after export define / add it in express js