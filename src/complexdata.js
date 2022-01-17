const express = require("express");
require("./db/conn3");
// add model
const User = require("./models/complex.model");
const userRouter = require("./routes/complex.routes");
const app = express();
const port= process.env.PORT || 8000;
// convert req.body object to json object / it is a middelware
app.use(express.json());
// app.use(bodyParser.json());
app.use(userRouter);

app.listen(port, ()=>{
    console.log(`connection is setup on port ${port}`);
});