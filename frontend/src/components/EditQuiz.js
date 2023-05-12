//IT21098246
//Samiru J.G.S


import React ,{useState , useEffect} from "react"; //useState is needed for functional components
import axios from "axios";
import { useLocation } from "react-router-dom";

function EditQuiz (){

    const [form , setForm] = useState({
        status:"",
        Question:"",
        Answer_1:"",
        Answer_2:"",
        Answer_3:"",
        Answer_4:"",
        Answer:"",
    })
    

    const [Question,setQuestion] = useState("");
    const [Answer_1,setAnswer_1] = useState("");
    const [Answer_2,setAnswer_2] = useState("");
    const [Answer_3,setAnswer_3] = useState("");
    const [Answer_4,setAnswer_4] = useState("");
    const [Answer,setAnswer] = useState("");

    const location = useLocation();
    console.log(location); //testing for function in console getting ID
    const id = location.pathname.split("/")[2];
    console.log(id);  //testing for function in console and splitting ID

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const updateQuiz = {
            Question,
            Answer_1,
            Answer_2,
            Answer_3,
            Answer_4,
            Answer
        }
    console.log(updateQuiz);
        //input any authentications are needed
        //(path,function needed to execute)
        axios.put( `http://localhost:8070/quiz/update/${id}`,updateQuiz).then(()=>{
            alert("Quiz has been Edited")
           
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(updateQuiz); //printing the sent form data on console.log f12
        
    }


    
    const [quizs,setQuizs] = useState([]); //taking all the datas from mongoDB input into this array
    // const params = useParams();
    useEffect(()=>{

            function getQuizs () {
              axios.get(`http://localhost:8070/quiz/get/${id}`)
              .then((res)=>{

                
                console.log("your data has been received")
                console.log(res.data.quiz)

                //alert(res.data)
                
                
                //setQuizs(res.data); //using setQuizs function to retrieve data and display on website
                setForm(res.data.quiz);

                setQuestion(res.data.quiz.Question);
                setAnswer_1(res.data.quiz.Answer_1);
                setAnswer_2(res.data.quiz.Answer_2);
                setAnswer_3(res.data.quiz.Answer_3);
                setAnswer_4(res.data.quiz.Answer_4);
                setAnswer(res.data.quiz.Answer);

            }).catch((err)=>{
                    alert(err.message);
              })
            }
            getQuizs();
        },[quizs]) //[quizs] to update the array instantly when changed rather than refresh page.




    
   


    return (
    <div>
        {/* // -------------------------------------------------------------------------------Top Navigation Start----------------------------------------------------------------------------------------------- */}
        <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="navbar-brand" href="/AdminPanel">Zoo management system</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                 <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li class="nav-item ">
                     <a class="nav-link" href="/AdminPanel">Home</a>
                   </li>
                   <li class="nav-item ">
                     <a class="nav-link" href="/addquiz">Add a Quiz </a>
                   </li>
                   <li class="nav-item active">
                     <a class="nav-link" href="/viewquiz"><span class="sr-only">(current)</span>View Quizzes</a>
                   </li>
                  
                 </ul>
                 
             
                 <div>
             
                 <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  
                 </ul>
                   
                 </div>
               </div>
             </nav>
             </div>
       {/* //----------------------------------------------------------------------------------------------Top Navigation End-------------------------------------------------- */}
          
        <div className="container" ><br></br>
        <h3> Update the Quiz </h3> <br></br>

       
            <form onSubmit={sendData}>
           
          
                <div className="form-row" >
                <div className="form-group col-md-6">
                    <label for="inputQuestion">Question</label>
                    <input type="Text" className="form-control" id="inputQuestion" placeholder="Question" 
                    onChange={(e)=>{ //onchange refers to saving automatically when typing

                        setQuestion(e.target.value); //save the target values in Question variable
                    }}
                    defaultValue={form.Question}
                    />
                
                </div>
                </div> 

                <div className="form-row">
                <label for="inputAnswer1">Answer 1</label>
                <input type="Text" className="form-control" id="inputAnswer1" placeholder="answer 1.."
                
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setAnswer_1(e.target.value); //save the target values in Question variable
                }}
                    defaultValue={form.Answer_1}
                />
                </div><br></br>   

                <div className="form-group">
                <label for="inputAnswer2">Answer 2</label>
                <input type="text" className="form-control" id="inputAnswer2"  placeholder="answer 2.."
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setAnswer_2(e.target.value); //save the target values in Question variable
                }} 
                defaultValue={form.Answer_2}
                />
                </div>

            
                <div className="form-group">
                <label for="inputAnswer3">Answer 3</label>
                <input type="text" className="form-control" id="inputAnswer3"  placeholder="answer 3.."
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                setAnswer_3(e.target.value); //save the target values in Question variable
                }} 
                defaultValue={form.Answer_3}
                />
                </div>



                <div className="form-group">
                <label for="inputAnswer4">Answer 4</label>
                <input type="text" className="form-control" id="inputAnswer4"  placeholder="answer 4.."
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                setAnswer_4(e.target.value); //save the target values in Question variable
                }} 
                defaultValue={form.Answer_4}
                />
                </div>

                <div className="form-group">
                <label for="inputAnswer">The correct answer</label>
                <input type="text" className="form-control" id="inputAnswer"  placeholder="correct answer.."
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                setAnswer(e.target.value); //save the target values in Question variable
                }} 
                defaultValue={form.Answer}
                />
                </div>

                <button type="submit" className="btn btn-primary">Update quiz</button>
        </form>
    </div>
    </div>
        
       
            


    )
    
}
export default EditQuiz;