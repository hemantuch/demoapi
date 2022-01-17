const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/users-api", {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
    // useFindAndModify:true
}).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log("no connection");
})