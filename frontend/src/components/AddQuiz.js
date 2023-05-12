

import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";


//import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddEvent (){

 //add toastify message
 const notify = () => toast("Successfully quiz added");
 const notify2 = () => toast("Quiz already exists");



    //addevent function//
    const [Question,setQuestion] = useState("");
    const [Answer_1,setAnswer_1] = useState("");
    const [Answer_2,setAnswer_2] = useState("");
    const [Answer_3,setAnswer_3] = useState("");
    const [Answer_4,setAnswer_4] = useState("");
    const [Answer,setAnswer] = useState("");
    


    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const newQuiz = {
            Question,
            Answer_1,
            Answer_2,
            Answer_3,
            Answer_4,
            Answer
           
            
        }

        //input any authentications are needed
        //(path,function needed to execute)
        axios.post ( "http://localhost:8070/quiz/add",newQuiz).then(()=>{
            //alert("Quiz Added")
            notify();
            
        }).catch((err)=>{
            //alert("quiz already exists");
            notify2();
        });


        // console.log(newQuiz); //printing the sent form data on console.log f12
        
    }

  
  

    return (
      <div  >
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
        
        <div className="container" >
          <br></br>
        <h3> Add New Quiz </h3>
        <br></br>
            <form onSubmit={sendData}>

            <div className="form-row" >
            <div className="form-group col-md-6">
                <label for="inputQuestion">Question</label>
                <input type="Text" className="form-control" id="inputQuestion" placeholder="Question" 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setQuestion(e.target.value); //save the target values in Question variable
                }} />
            </div>
            </div>

            <div className="form-row">
            <label for="inputAnswer1">Answer 1</label>
            <input type="Text" className="form-control" id="inputAnswer1" placeholder="answer 1.."
            
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setAnswer_1(e.target.value); //save the target values in Question variable
            }} />
              
            </div><br></br>

            <div className="form-group">
            <label for="inputAnswer2">Answer 2</label>
            <input type="text" className="form-control" id="inputAnswer2"  placeholder="answer 2.."
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setAnswer_2(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>


        
            <div className="form-group">
            <label for="inputAnswer3">Answer 3</label>
            <input type="text" className="form-control" id="inputAnswer3"  placeholder="answer 3.."
            onChange={(e)=>{ //onchange refers to saving automatically when typing

              setAnswer_3(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
            <label for="inputAnswer4">Answer 4</label>
            <input type="text" className="form-control" id="inputAnswer4"  placeholder="answer 4.."
            onChange={(e)=>{ //onchange refers to saving automatically when typing

              setAnswer_4(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
            <label for="inputAnswer">The correct answer</label>
            <input type="text" className="form-control" id="inputAnswer"  placeholder="correct answer.."
            onChange={(e)=>{ //onchange refers to saving automatically when typing

              setAnswer(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>
          
             <button onSubmit={sendData} type="submit" className="btn btn-primary">Add an quiz</button>
            
        </form> 
       <br></br><br></br>






</div>
  </div>


)

}
export default AddEvent;