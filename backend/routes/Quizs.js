const router = require("express").Router();
let Quiz = require ("../models/Quiz");


////////////////////////////////////////create a Quiz//////////////////////////////////////

router.route("/add").post(async(req,res)=>{ //loads http://localhost:8070/Quiz/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd

    const Question = req.body.Question;
    const Answer_1 = req.body.Answer_1;
    const Answer_2 = req.body.Answer_2;
    const Answer_3 = req.body.Answer_3;
    const Answer_4 = req.body.Answer_4;
    const Answer = req.body.Answer;
    
    


const newQuiz = new Quiz({
    Question,
    Answer_1,
    Answer_2,
    Answer_3,
    Answer_4,
    Answer,
    
})
    //validating if the added quiz is available or not by question
    const quiz = await Quiz.findOne({ Question });

    if (quiz)

    return res.status(400).json({ msg: "This record already exists." });
    newQuiz.save().then(()=>{  //passing values through via document
        res.json("Quiz Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})


////////////////////////////////view ALL Quizs///////////////////////////////////////

router.route("/").get((req,res)=>{ //loads http://localhost:8070/Quizs

    Quiz.find().then((Quizs)=>{
        res.json(Quizs)

    }).catch((err)=>{
        console.log(err)
    })
})


////////////////////////////////Update a Quiz///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take QuizID and update only the relevant Quiz only
    //loads http://localhost:8070/Quiz/update 
    let QuizId = req.params.id;
    const {Question, Answer_1, Answer_2, Answer_3, Answer_4, Answer}  = req.body; //dStructure

    const updateQuiz = {
        Question,
        Answer_1,
        Answer_2,
        Answer_3,
        Answer_4,
        Answer,


    }
    const update = await Quiz.findByIdAndUpdate(QuizId,updateQuiz)
    .then(() => {  //await is waiting for the function to complete
        res.status(200).send({status: "Quiz updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a Quiz///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let QuizId = req.params.id;  
    await Quiz.findByIdAndDelete(QuizId).then(() => {
        res.status(200).send({status : "Quiz deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Quiz" , error: err.message});
    })
})

////////////////////////////////View only one Quiz///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let quizId = req.params.id;  
    const quiz = await Quiz.findById(quizId).then((quiz) => {
        res.status(200).send({status : "Quiz Fetched", quiz : quiz});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Quiz" , error: err.message});
    })
})

module.exports = router;

