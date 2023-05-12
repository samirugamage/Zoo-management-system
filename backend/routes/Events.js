const router = require("express").Router();
let Event = require ("../models/Event");

//////////create an event/////////////

router.route("/add").post(async (req,res)=>{ //loads http://localhost:8070/event/add
    //using postman software to test
    //getting the below variables via requesting from backEnd to frontEnd

const name = req.body.name;
const description = req.body.description;
const date = req.body.date;
const place = req.body.place;
const count = req.body.count;



const newEvent = new Event({
    name,
    description,
    date,
    place,
    count
    


})

    //validation of event name if exists 
       

const event = await Event.findOne({ name });

    if (event)

    return res.status(400).json({ msg: "This event already exists." });
    newEvent.save().then(()=>{  //passing values through via document
        res.json("Event Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})






////////////////////////////////view ALL Events///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/events

    Event.find().then((events)=>{
        res.json(events)

    }).catch((err)=>{
        console.log(err)
    })
})









////////////////////////////////Update an event///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take EventID and update only the relevant Event only
    //loads http://localhost:8070/events/update 
    let eventId = req.params.id;
    const {name, eventType, description, date, place,count}  = req.body; //dStructure

    const updateEvent = {
        name,
        eventType,
        description,
        date,
        place,
        count
        
    }
    const update = await Event.findByIdAndUpdate(eventId,updateEvent).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "Event updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete an event///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let eventId = req.params.id;  
    await Event.findByIdAndDelete(eventId).then(() => {
        res.status(200).send({status : "Event deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting event" , error: err.message});
    })
})

////////////////////////////////View only one event///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let eventId = req.params.id;  
    const event = await Event.findById(eventId).then((event) => {
        res.status(200).send({status : "Event Fetched", event : event});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Event" , error: err.message});
    })
})


module.exports = router; 

