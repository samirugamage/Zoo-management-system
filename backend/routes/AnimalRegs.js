const router = require("express").Router();
let AnimalReg = require ("../models/AnimalReg");


////////////////////////////////////////create an Animal profile//////////////////////////////////////

router.route("/add").post(async(req,res)=>{ //loads http://localhost:8070/Animal/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd

const AnimalRegNum = req.body.AnimalRegNum;
const Name = req.body.Name;
const BirthDate  = req.body.BirthDate;
const BornCountry = req.body.BornCountry;
const Category  = req.body.Category;
const ScientificName = req.body.ScientificName;
const TrophicLevel = req.body.TrophicLevel;
const Height = req.body.Height;
const Weight = req.body.Weight;
const Sex = req.body.Sex;




const newAnimal = new AnimalReg({
    AnimalRegNum,
    Name,
    BirthDate,
    BornCountry,
    Category,
    ScientificName,
    TrophicLevel,
    Height,
    Weight,
    Sex,
})
    //CHECKING IF ANIMAL IS ADDED AND EXISTS ON THE DATABASE
    const user = await AnimalReg.findOne({Name});

    if (user)

    return res.status(400).json({ msg: "This animal already exists." });
    newAnimal.save().then(()=>{  //passing values through via document
        res.json("Animal Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})



////////////////////////////////view ALL Animals///////////////////////////////////////

router.route("/").get((req,res)=>{ //loads http://localhost:8070/Animal

    AnimalReg.find().then((Animals)=>{
        res.json(Animals)

    }).catch((err)=>{
        console.log(err)
    })
})


////////////////////////////////Update a Animal///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take AnimalID and update only the relevant Animal only
    //loads http://localhost:8070/Animal/update
    let AnimalId = req.params.id;
    const {AnimalRegNum,Name,BirthDate,BornCountry,Category,ScientificName,TrophicLevel,Height,Weight,Sex,}  = req.body; //dStructure

    const updateAnimal = {
        AnimalRegNum,
        Name,
        BirthDate,
        BornCountry,
        Category,
        ScientificName,
        TrophicLevel,
        Height,
        Weight,
        Sex,

    }
    const update = await AnimalReg.findByIdAndUpdate(AnimalId,updateAnimal)
    .then(() => {  //await is waiting for the function to complete
        res.status(200).send({status: "Animal updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a Animal///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let AnimalId = req.params.id;  
    await AnimalReg.findByIdAndDelete(AnimalId).then(() => {
        res.status(200).send({status : "Animal deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Animal" , error: err.message});
    })
})

////////////////////////////////View only one Animal///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let animalId = req.params.id;  
    const animal = await AnimalReg.findById(animalId).then((animal) => {
        res.status(200).send({status : "Animal Fetched", animal : animal});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Animal" , error: err.message});
    })
})



module.exports = router; 

