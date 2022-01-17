const express = require("express");
// add db coonection
require("./db/conn2");

// const Animal = require("./models/animals.model");
// const validator = require("validator");
const animalRouter = require("./routes/animal.routes");

const app = express();
const port= process.env.PORT || 8000;
// convert req.body object to json object / it is a middelware
app.use(express.json());
// app.use(bodyParser.json());
app.use(animalRouter);

app.listen(port, ()=>{
    console.log(`connection is setup on port ${port}`);
});
