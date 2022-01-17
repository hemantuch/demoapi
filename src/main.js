const express = require("express");
// add db coonection
require("./db/conn1");
// add model
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/users");
const userRouter = require("./routes/user.routes");
// passport

const app = express();
const port= process.env.PORT || 8000;
// convert req.body object to json object / it is a middelware
app.use(express.json());
// app.use(bodyParser.json());
app.use(userRouter);


app.listen(port, ()=>{
    console.log(`connection is setup on port ${port}`);
});
