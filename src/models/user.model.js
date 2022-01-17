const mongoose= require("mongoose");
// const validator = require("validator");
const userSchema = new mongoose.Schema({    
    phone:{
        type:Number,
        unique:true,
        min:10,
        required:true
    },
    pin : {
        type :Number,
        required:true,
        min:6
    } 
    
})
const User = new mongoose.model('User',userSchema);
module.exports = User;
