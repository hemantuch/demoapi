const mongoose= require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
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
    phone:{
        type:Number,
        unique:true,
        min:10,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
// creating collection name- Student
// it is a class and should be singular when it will run it would be plural 
const Student = new mongoose.model('Student',studentSchema);
// after making collection export it
module.exports = Student;
// after export define / add it in express js