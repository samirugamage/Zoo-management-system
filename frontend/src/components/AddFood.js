

import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";


//import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddFood (){

 //add toastify message
 const notify = () => toast("Successfully food added");
 const notify2 = () => toast("This food already exists");



    //addevent function//
    const [fid,setFoodReg] = useState("");
    const [name,setName] = useState("");
    //const [BirthDate,setBirthDate] = useState("");
    const [remainingWeight,setWeight] = useState("");
 
    


    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const newFood = {
            fid,
            name,
           // BirthDate,
         remainingWeight
           
            
        }

        //input any authentications are needed
        //(path,function needed to execute)
        axios.post ( "http://localhost:8070/food/add",newFood).then(()=>{
            
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
                     <a class="nav-link" href="/addfood">Add an Food </a>
                   </li>
                   <li class="nav-item active">
                     <a class="nav-link" href="/viewfood"><span class="sr-only">(current)</span>View all Food Items</a>
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
        <h3> Add New Food </h3>
        <br></br>
            <form onSubmit={sendData}>

            <div className="form-row" >
            <div className="form-group col-md-6">
                <label for="inputregno">Food registration number</label>
                <input type="Text" className="form-control" id="inputregno" placeholder="001" 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setFoodReg(e.target.value); //save the target values in Question variable
                }} />
            </div>
            </div>

            <div className="form-row">
            <label for="inputName">name of the food</label>
            <input type="Text" className="form-control" id="inputName" placeholder="Luna"
            
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setName(e.target.value); //save the target values in Question variable
            }} />
              
            </div><br></br>

           

            <div className="form-group">
            <label for="inputHeight">Remaining Weight</label>
            <input type="text" className="form-control" id="inputHeight"  placeholder="2"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setWeight(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            
          
             <button onSubmit={sendData} type="submit" className="btn btn-primary">Add an food</button>
            
        </form> 
       <br></br><br></br>






</div>
  </div>


)

}
export default AddFood;