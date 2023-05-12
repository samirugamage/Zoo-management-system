const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const quizSchema = new Schema(
    {
        Question : {type:String,
        required: false},//name string is required checked via backend validation
    
        Answer_1 : {type : String,
        required :false},

        Answer_2 : {type : String,
            required :false},
        
        Answer_3 : {type : String,
        required :false},
        
        Answer_4: {type : String,
            required :false},

        Answer: {type : String,
        required :false},
        

    }
)

const Quiz = mongoose.model("Quiz",quizSchema); //(table name ,document name),Schema name

module.exports = Quiz; 