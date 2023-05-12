import React ,{useState , useEffect} from "react"; //useState is needed for functional components
import axios from "axios";
import { useLocation } from "react-router-dom";

function EditFood (){

    const [form , setForm] = useState({
        status:"",
        fid:"",
        name:"",
        remainingWeight:"",
    })
    

    const [fid,setQuestion] = useState("");
    const [name,setName] = useState("");
    const [remainingWeight,setRemainingWeight] = useState("");
    

    const location = useLocation();
    console.log(location); //testing for function in console getting ID
    const id = location.pathname.split("/")[2];
    console.log(id);  //testing for function in console and splitting ID

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const updateQuiz = {
            fid,
            name,
            remainingWeight
            
        }
    console.log(updateQuiz);
        //input any authentications are needed
        //(path,function needed to execute)
        axios.put( `http://localhost:8070/food/update/${id}`,updateQuiz).then(()=>{
            alert("Food Item has been Edited")
           
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(updateQuiz); //printing the sent form data on console.log f12
        
    }


    
    const [quizs,setQuizs] = useState([]); //taking all the datas from mongoDB input into this array
    // const params = useParams();
    useEffect(()=>{

            function getFoods () {
              axios.get(`http://localhost:8070/food/get/${id}`)
              .then((res)=>{

                
                console.log("your data has been received")
                console.log(res.data.food)

                
                
                
                //setQuizs(res.data); //using setQuizs function to retrieve data and display on website
                setForm(res.data.food);
                setQuestion(res.data.food.fid);
                setName(res.data.food.name);
                setRemainingWeight(res.data.food.remainingWeight);

            }).catch((err)=>{
                    alert(err.message);
              })
            }
            getFoods();
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
                     <a class="nav-link" href="/addfood">Add a Food item </a>
                   </li>
                   <li class="nav-item active">
                     <a class="nav-link" href="/viewfood"><span class="sr-only">(current)</span>View Food Items</a>
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
        <h3> Update the Food Item </h3> <br></br>

       
            <form onSubmit={sendData}>
           
          
                <div className="form-row" >
                <div className="form-group col-md-6">
                    <label for="inputQuestion">fid</label>
                    <input type="Text" className="form-control" id="inputQuestion" placeholder="fid" 
                    onChange={(e)=>{ //onchange refers to saving automatically when typing

                        setQuestion(e.target.value); //save the target values in fid variable
                    }}
                    defaultValue={form.fid}
                    />
                
                </div>
                </div> 

                <div className="form-row">
                <label for="inputAnswer1">Food Name</label>
                <input type="Text" className="form-control" id="inputAnswer1" placeholder="answer 1.."
                
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setName(e.target.value); //save the target values in fid variable
                }}
                    defaultValue={form.name}
                />
                </div><br></br>   

                <div className="form-group">
                <label for="inputAnswer2">Remaining Weight</label>
                <input type="text" className="form-control" id="inputAnswer2"  placeholder="answer 2.."
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setRemainingWeight(e.target.value); //save the target values in fid variable
                }} 
                defaultValue={form.remainingWeight}
                />
                </div>

            

                <button type="submit" className="btn btn-primary">Update food</button>
        </form>
    </div>
    </div>
        
       
            


    )
    
}
export default EditFood;