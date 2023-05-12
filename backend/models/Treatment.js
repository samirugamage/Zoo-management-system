const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const TreatmentsSchema = new Schema(
    {
        AnimalRegNum: {type:String,
            required: false},//name string is required checked via backend validation
    

        Name: {type : String,
            required :false},

        DiseaseDesc : {type : String,
            required :false},
        
        Treatments: {type : String,
            required :false},
        
        TreatmentStartDate : {
                type : Date,
                required : false
            },
        MedicineName: {
                type : String,
                required : false
            },

        MediNo: {
                type : String,
                required : false
            },

            
        AmountPerDose: {
            type : String,
            required : false
        },

        
        NumTimesPerDay: { 
            type : String,
            required : false
        },

        
        MedicationDays: { 
            type : String,
            required : false
        },

               
    }
)

const Treatment = mongoose.model("Treatment",TreatmentsSchema); //(table name ,document name),Schema name

module.exports = Treatment;