const router = require("express").Router();
let Treatment = require ("../models/Treatment");





////////////////////////////////////////create an Treatments//////////////////////////////////////

router.route("/add").post(async (req,res)=>{ //loads http://localhost:8070/treatment/add
    //using postman software to test
    //getting the below variables via requesting from backEnd to frontEnd

const AnimalRegNum = req.body.AnimalRegNum;
const Name = req.body.Name;
const DiseaseDesc= req.body.DiseaseDesc;
const Treatments = req.body.Treatments;
const TreatmentStartDate = req.body.TreatmentStartDate;
const MedicineName= req.body.MedicineName;
const MediNo= req.body.MediNo;
const AmountPerDose = req.body.AmountPerDose;
const NumTimesPerDay = req.body.NumTimesPerDay;
const MedicationDays = req.body.MedicationDays;



const newTreatment = new Treatment({
    AnimalRegNum,
    Name,
    DiseaseDesc,
    Treatments,
    TreatmentStartDate,
    MedicineName,
    MediNo,
    AmountPerDose,
    NumTimesPerDay,
    MedicationDays,
})

    //validation of treatment name if exists 
       

const treatment = await Treatment.findOne({ Name });

    if (treatment)

    return res.status(400).json({ msg: "This Treatment already exists." });
    newTreatment.save().then(()=>{  //passing values through via document
        res.json("Treatment Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})






////////////////////////////////view ALL Treatments ///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/treatment

    Treatment.find().then((Treatments)=>{
        res.json(Treatments)

    }).catch((err)=>{
        console.log(err)
    })
})









////////////////////////////////Update an Treatment///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take TreatmentID and update only the relevant Treatment only
    //loads http://localhost:8070/Treatment/update 
    let treatmentId = req.params.id;
    const {AnimalRegNum,Name,DiseaseDesc,Treatments,TreatmentStartDate,MedicineName,MediNo,AmountPerDose,NumTimesPerDay,MedicationDays,}  = req.body; //dStructure

    const updateTreatment = {
        AnimalRegNum,
        Name,
        DiseaseDesc,
        Treatments,
        TreatmentStartDate,
        MedicineName,
        MediNo,
        AmountPerDose,
        NumTimesPerDay,
        MedicationDays,
        
    }
    const update = await Treatment.findByIdAndUpdate(treatmentId,updateTreatment).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "Treatment updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete an Treatment///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let treatmentId = req.params.id;  
    await Treatment.findByIdAndDelete(treatmentId).then(() => {
        res.status(200).send({status : "Treatment deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting treatment" , error: err.message});
    })
})

////////////////////////////////View only one treatment///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let treatmentId = req.params.id;  
    const treatment = await Treatment.findById(treatmentId).then((treatment) => {
        res.status(200).send({status : "Treatment Fetched", treatment : treatment});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get treatment" , error: err.message});
    })
})



///////////////////viewonly treatments by animal registration number
// Get treatments by Animal Registration Number
router.route("/animal/:AnimalRegNum").get(async (req, res) => {
    const animalRegNum = req.params.AnimalRegNum;
    try {
      const treatments = await Treatment.find({ AnimalRegNum: animalRegNum });
      res.status(200).send({ status: "Treatments fetched", treatments: treatments });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "Error fetching treatments", error: err.message });
    }
  });
  

module.exports = router;

