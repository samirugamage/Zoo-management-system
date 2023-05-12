const router = require("express").Router();
let Food = require ("../models/Food");

//////////create an food/////////////

router.route("/add").post(async (req,res)=>{ //loads http://localhost:8070/food/add
    //using postman software to test
    //getting the below variables via requesting from backEnd to frontEnd

const name = req.body.name;
const fid = req.body.fid;
const remainingWeight = req.body.remainingWeight;



const newFood = new Food({
    name,
    fid,
    remainingWeight
    
})

    //validation of food name if exists 
       

const food = await Food.findOne({ name });

    if (food)

    return res.status(400).json({ msg: "This food already exists." });
    newFood.save().then(()=>{  //passing values through via document
        res.json("Food Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})






////////////////////////////////view ALL Events///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/foods

    Food.find().then((foods)=>{
        res.json(foods)

    }).catch((err)=>{
        console.log(err)
    })
})






////////////////////////////////Upadte Food Item////////////////

router.route("/update/:id").put(async (req,res) => { // :id will take FoodID and update only the relevant Food only
    //loads http://localhost:8070/food/update 
    let FoodId = req.params.id;
    const { name,fid,remainingWeight}  = req.body; //dStructure

    const updateFood = {
        name,
        fid,
        remainingWeight,


    }
    const update = await Food.findByIdAndUpdate(FoodId,updateFood)
    .then(() => {  //await is waiting for the function to complete
        res.status(200).send({status: "Food Item updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Update a bought food///////////////////////////////////////
// async function will wait if many requests are sent to backend processing one by one
router.route("/updatebought/:fid").put(async (req, res) => { // :fid will take FoodID and update only the relevant Food only
    // loads http://localhost:8070/foods/updatebought
    let foodFid = req.params.fid;
    const { additionalWeight } = req.body; // dStructure

    const food = await Food.findOne({ fid: foodFid });

    if (!food) {
        res.status(404).send({ status: "Food not found with the given fid" });
        return;
    }

    const updatedRemainingWeight = food.remainingWeight + additionalWeight;

    const update = await Food.findOneAndUpdate({ fid: foodFid }, { remainingWeight: updatedRemainingWeight }, { new: true }).then((updatedFood) => {
        // await is waiting for the function to complete
        res.status(200).send({ status: "Food updated", food: updatedFood });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error Updating data", error: err.message });
    });

});

///////////////update a given food/////////////////////
router.route("/updategiven/:fid").put(async (req, res) => { // :fid will take FoodID and update only the relevant Food only
    // loads http://localhost:8070/foods/update
    let foodFid = req.params.fid;
    const { additionalWeight } = req.body; // dStructure

    const food = await Food.findOne({ fid: foodFid });

    if (!food) {
        res.status(404).send({ status: "Food not found with the given fid" });
        return;
    }

    const updatedRemainingWeight = food.remainingWeight - additionalWeight;

    const update = await Food.findOneAndUpdate({ fid: foodFid }, { remainingWeight: updatedRemainingWeight }, { new: true }).then((updatedFood) => {
        // await is waiting for the function to complete
        res.status(200).send({ status: "Food updated", food: updatedFood });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error Updating data", error: err.message });
    });

});


////////////////////////////////Delete an food///////////////////////////////////////

router.route("/delete/:fid").delete(async (req, res) => {
    let fid = req.params.fid;
    await Food.findOneAndDelete({ fid: fid })
      .then(() => {
        res.status(200).send({ status: "Food item deleted" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error Deleting food", error: err.message });
      });
  });
  

////////////////////////////////View only one food///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let foodId = req.params.id;  
    const food = await Food.findById(foodId).then((food) => {
        res.status(200).send({status : "Food Fetched", food : food});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Food" , error: err.message});
    })
})


module.exports = router; 

