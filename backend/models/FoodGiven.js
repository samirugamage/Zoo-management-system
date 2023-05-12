const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const foodGivenSchema = new Schema(
    {
        fid: {type : String,
                required :false},

        name : {type : String,
            required :false},
    
        foodsGivenKg : {type : Number,
            required :false}
               
    }
)

const FoodGiven = mongoose.model("FoodGiven",foodGivenSchema); //(table name ,document name),Schema name

module.exports = FoodGiven;