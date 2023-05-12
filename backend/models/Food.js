const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const foodSchema = new Schema(
    {
        fid: {type : String,
                required :false},

        name : {type : String,
            required :false},
    
        remainingWeight : {type : Number,
                required :false}
               
    }
)

const Food = mongoose.model("Food",foodSchema); //(table name ,document name),Schema name

module.exports = Food;