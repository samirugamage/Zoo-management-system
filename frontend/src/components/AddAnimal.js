

import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";


//import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddAnimal (){

 //add toastify message
 const notify = () => toast("Successfully animal added");
 const notify2 = () => toast("This animal already exists");



    //addevent function//
    const [AnimalRegNum,setAnimalRegNum] = useState("");
    const [Name,setName] = useState("");
    const [BirthDate,setBirthDate] = useState("");
    const [BornCountry,setBornCountry] = useState("");
    const [Category,setCategory] = useState("");
    const [ScientificName,setScientificName] = useState("");
    const [TrophicLevel,setTrophicLevel] = useState("");
    const [Height,setHeight] = useState("");
    const [Weight,setWeight] = useState("");
    const [Sex,setSex] = useState("");
    


    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const newAnimal = {
            AnimalRegNum,
            Name,
            BirthDate,
            BornCountry,
            Category,
            ScientificName,
            TrophicLevel,
            Height,
            Weight,
            Sex
           
            
        }

        //input any authentications are needed
        //(path,function needed to execute)
        axios.post ( "http://localhost:8070/animalreg/add",newAnimal).then(()=>{
            
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
                     <a class="nav-link" href="/addanimal">Add an Animal </a>
                   </li>
                   <li class="nav-item active">
                     <a class="nav-link" href="/viewanimal"><span class="sr-only">(current)</span>View all animals</a>
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
        <h3> Add New Animal </h3>
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
            <label for="inputName">Name of the animal</label>
            <input type="Text" className="form-control" id="inputName" placeholder="Luna"
            
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setName(e.target.value); //save the target values in Question variable
            }} />
              
            </div><br></br>

            <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputDate">Birth Date</label>
                <input style={{ marginLeft:'10px'}}  type="date" id="BirthDate" name="BirthDate"
                onChange={(e) =>{
                    setBirthDate(e.target.value);
        }}/>
            </div>
            </div>

            <div className="form-group">
            <label for="inputBorn_country">Born country</label>
            <input type="text" className="form-control" id="inputBorn_country"  placeholder="Born_country"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setBornCountry(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
                <label for="inputanimalcategory">Animal category</label>
                <select id="inputanimalcategory1" className="form-control"
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setCategory(e.target.value); //save the target values in name variable
                }} >
                <option defaultValue>Choose...</option>
                <option value="mammals">Mammals</option>
                <option value="birds">Birds</option>
                <option value="reptiles">Reptiles</option>
                <option value="amphibians">Amphibians</option>
                <option value="fish">Fish</option>
                <option value="invertebrates">Invertebrates</option>
                
                </select></div>



        
            <div className="form-group">
            <label for="inputsname">Scientific Name</label>
            <input type="text" className="form-control" id="inputsname"  placeholder="luna"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setScientificName(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
                <label for="inputTrophicLevel">Trophic level</label>
                <select id="inputTrophicLevel1" className="form-control"
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setTrophicLevel(e.target.value); //save the target values in name variable
                }} >
                <option defaultValue>Choose...</option>
                <option>Herbivore</option>
                <option> Carnivore</option>
                <option> Omnivore</option>

                </select></div>

            <div className="form-group">
            <label for="inputHeight">Height</label>
            <input type="text" className="form-control" id="inputHeight"  placeholder="2 feet"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setHeight(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
            <label for="inputWeight">Weight</label>
            <input type="text" className="form-control" id="inputWeight"  placeholder="3 pounds"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setWeight(e.target.value); //save the target values in Question variable
            }} 
            />
            </div>

            <div className="form-group">
                <label for="inputsex">Gender</label>
                <select id="inputsex1" className="form-control"
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setSex(e.target.value); //save the target values in name variable
                }} >
                <option defaultValue>Choose...</option>
                <option>Female</option>
                <option> Male</option>
                </select></div>

            
          
             <button onSubmit={sendData} type="submit" className="btn btn-primary">Add an animal</button>
            
        </form> 
       <br></br><br></br>






</div>
  </div>


)

}
export default AddAnimal;