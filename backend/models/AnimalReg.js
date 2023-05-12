const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const animalSchema = new Schema(
    {
        AnimalRegNum: {type:String,
            required :false},//name string is required checked via backend validation
    

        Name : {type : String,
            required:false},

        BirthDate: {type : String,
            required:false},
        
        BornCountry : {type : String,
            required:false},
        
        Category: {type : String,
            required:false},

        ScientificName: {type : String,
            required:false},

        TrophicLevel: {type : String,
            required:false},

        Height: {type : String,
            required:false},

        Weight: {type : String,
                required:false},

        Sex: {type : String,
                    required:false},
                    
                
            

    }
)

const Animal = mongoose.model("AnimalReg",animalSchema); //(table name ,document name),Schema name

module.exports = Animal; 