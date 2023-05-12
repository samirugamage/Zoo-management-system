const router = require("express").Router();
let FoodBought = require ("../models/FoodBought");

//////////create an food/////////////

router.route("/add").post(async (req,res)=>{ //loads http://localhost:8070/food/add
    //using postman software to test
    //getting the below variables via requesting from backEnd to frontEnd

    const name = req.body.name;
    const fid = req.body.fid;
    const foodsBoughtKg = req.body.foodsBoughtKg;

    const newFood = new FoodBought({
        name,
        fid,
        foodsBoughtKg
    });

    newFood.save().then(() => {
        res.json("FoodBought Added");
    }).catch((err) => {
        console.log(err);
    });
});






////////////////////////////////view ALL foodgiven ///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/foodsBoughtKg

    FoodBought.find().then((foodsBoughtKg)=>{
        res.json(foodsBoughtKg)

    }).catch((err)=>{
        console.log(err)
    })
})



////////////////////////////////Delete an food///////////////////////////////////////

router.route("/delete/:fid").delete(async (req, res) => {
    let fid = req.params.fid;
    await FoodBought.deleteMany({ fid: fid })
      .then((result) => {
        res.status(200).send({ status: "FoodBought records deleted", deletedCount: result.deletedCount });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error Deleting food records", error: err.message });
      });
  });
  

////////////////////////////////View only one food///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let foodId = req.params.id;  
    const food = await FoodBought.findById(foodId).then((food) => {
        res.status(200).send({status : "FoodBought Fetched", food : food});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get FoodBought" , error: err.message});
    })
})


module.exports = router; 

