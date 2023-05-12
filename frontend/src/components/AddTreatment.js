

import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";


//import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddTreatment (){

 //add toastify message
 const notify = () => toast("Successfully Treatment added");
 const notify2 = () => toast("This Treatment already exists");



    //addevent function//
    const [AnimalRegNum,setAnimalRegNum] = useState("");
    const [Name,setName] = useState("");
    const [TreatmentStartDate,setTreatmentStartDate] = useState("");
    const [Treatments,setTreatments] = useState("");
    const [DiseaseDesc,setDiseaseDesc] = useState("");
    const [MedicineName,setMedicineName] = useState("");
    const [AmountPerDose,setAmountPerDose] = useState("");
    const [MediNo,setMediNo] = useState("");
    const [NumTimesPerDay,setNumTimesPerDay] = useState("");
    const [MedicationDays,setMedicationDays] = useState("");
    


    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const newTreatment = {
            AnimalRegNum,
            Name,
            DiseaseDesc,
            Treatments,
            TreatmentStartDate,
            MedicineName,
            MediNo,
            AmountPerDose,
            NumTimesPerDay,
            MedicationDays
           
            
        }

        //input any authentications are needed
        //(path,function needed to execute)
        axios.post ( "http://localhost:8070/treatment/add",newTreatment).then(()=>{
            
            notify();
            
        }).catch((err)=>{
            notify2();
        });


    
        
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
                     <a class="nav-link" href="/addtreatment">Add a Treatment </a>
                   </li>
                   <li class="nav-item active">
                     <a class="nav-link" href="/viewtreatment"><span class="sr-only">(current)</span>View all Treatments</a>
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
        <h3> Add New Treatment </h3>
        <br></br>
            <form onSubmit={sendData}>

            <div className="form-row" >
            <div className="form-group col-md-6">
                <label for="inputregno">Animal registration number</label>
                <input type="Text" className="form-control" id="inputregno" placeholder="QQxxxxxx" 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setAnimalRegNum(e.target.value); //save the target values in Question variable
                }} />
            </div>
            </div>

            <div className="form-row">
            <label for="inputAnswer1">Name of the animal</label>
            <input type="Text" className="form-control" id="inputAnswer1" placeholder="luna"
            
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setName(e.target.value); //save the target values in Question variable
            }} />
              
            </div><br></br>

            <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputDate">Treatment start Date</label>
                <input style={{ marginLeft:'10px'}}  type="date" id="startDate" name="startDate"
                onChange={(e) =>{
                    setTreatmentStartDate(e.target.value);
        }}/>
            </div>
            </div>

            <div className="form-group">
            <label for="inputAnswer2">treatments</label>
            <input type="text" className="form-control" id="inputAnswer2"  placeholder="pain medications"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setTreatments(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
            <label for="inputAnswer2">medicine name</label>
            <input type="text" className="form-control" id="inputAnswer2"  placeholder="name"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setMedicineName(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
            <label for="inputAnswer2">Amount per dose in millileters</label>
            <input type="text" className="form-control" id="inputAnswer2"  placeholder="12ml"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setAmountPerDose(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>


            
            <div className="form-group">
            <label for="inputAnswer2">disease description</label>
            <input type="text" className="form-control" id="inputAnswer2"  placeholder="wound in the leg"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setDiseaseDesc(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
            <label for="inputAnswer">medicine no</label>
            <input type="text" className="form-control" id="inputAnswer"  placeholder="123xxx"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setMediNo(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
            <label for="inputAnswer">no.of times / day</label>
            <input type="text" className="form-control" id="inputAnswer"  placeholder="2 times per day/morning/night/day"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setNumTimesPerDay(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>
            
            <div className="form-group">
            <label for="inputAnswer">medication days</label>
            <input type="text" className="form-control" id="inputAnswer"  placeholder="sat,sun"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setMedicationDays(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            

            
          
             <button onSubmit={sendData} type="submit" className="btn btn-primary">Add a treatment</button>
            
        </form> 
       <br></br><br></br>






</div>
  </div>


)

}
export default AddTreatment;