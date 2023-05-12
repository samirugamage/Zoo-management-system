const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070; 

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologL: true,
    useDindAndModify: false
});


const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb Connection success!");
});




//---------------------------------------------------samiru------------------------------------------------------

const guideRouter = require("./routes/Quizs.js")
app.use("/quiz",guideRouter); //loads http://localhost:8070/Quizs.js


//---------------------------------------umanda------------------------------//
const animalRouter = require("./routes/AnimalRegs.js")
app.use("/animalreg",animalRouter); //loads http://localhost:8070/animalreg.js

const treatmentRouter = require("./routes/Treatments.js")
app.use("/treatment",treatmentRouter); //loads http://localhost:8070/treatment.js

//---------------------------------------Chathumini------------------------------//
const foodRouter = require("./routes/Foods.js")
app.use("/food",foodRouter);

const foodGivenRouter = require("./routes/FoodGivens.js")
app.use("/foodgiven",foodGivenRouter);

const foodBoughtRouter = require("./routes/FoodBoughts.js")
app.use("/foodbought",foodBoughtRouter);
//---------------------------------------vijini------------------------------//
//-Events-
const eventRouter = require("./routes/Events.js")
app.use("/event",eventRouter); //loads http://localhost:8070/events.js





app.listen(PORT, () => {
    console.log(`Server is up and running on port number:  ${PORT}`)

});


