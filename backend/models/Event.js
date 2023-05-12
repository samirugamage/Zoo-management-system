const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const eventSchema = new Schema(
    {
        name : {type:String,
        required: false}, //name string is required checked via backend validation

        description : {type : String,
            required :false},
        
        date : {
                type : Date,
                required : false
            },
        place : {
                type : String,
                required : false
            },
        count : {
                type : Number,
                required : false
            }

               
    }
)

const Event = mongoose.model("Event",eventSchema); //(table name ,document name),Schema name

module.exports = Event;