const router = require("express").Router();
let FoodGiven = require ("../models/FoodGiven");

//////////create an foodgiven record/////////////

router.route("/add").post(async (req,res)=>{ //loads http://localhost:8070/food/add
    //using postman software to test
    //getting the below variables via requesting from backEnd to frontEnd

    const name = req.body.name;
    const fid = req.body.fid;
    const foodsGivenKg = req.body.foodsGivenKg;

    const newFood = new FoodGiven({
        name,
        fid,
        foodsGivenKg
    });

    newFood.save().then(() => {
        res.json("FoodGiven Added");
    }).catch((err) => {
        console.log(err);
    });
});






////////////////////////////////view ALL foodgiven ///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/foodsGivenKg

    FoodGiven.find().then((foodsGivenKg)=>{
        res.json(foodsGivenKg)

    }).catch((err)=>{
        console.log(err)
    })
})


  
//////delete all FoodID matched bought food items via delete fucntion in viewfood ondelete function
router.route("/delete/:fid").delete(async (req, res) => {
    let fid = req.params.fid;
    await FoodGiven.deleteMany({ fid: fid })
      .then((result) => {
        res.status(200).send({ status: "FoodGiven records deleted", deletedCount: result.deletedCount });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error Deleting food records", error: err.message });
      });
  });
  

module.exports = router; 

