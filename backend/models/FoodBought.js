const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const foodBoughtSchema = new Schema(
    {
        fid: {type : String,
                required :false},

        name : {type : String,
            required :false},
    
        foodsBoughtKg : {type : Number,
            required :false}
               
    }
)

const FoodBought = mongoose.model("FoodBought",foodBoughtSchema); //(table name ,document name),Schema name

module.exports = FoodBought;