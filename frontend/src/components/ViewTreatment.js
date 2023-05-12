


import React ,{useState,useEffect,useRef} from "react"; //useState is needed for functional components
import axios from "axios";

import ReactHTMLTableToExcel from 'react-html-table-to-excel'; //report generation
import ReactToPdf from 'react-to-pdf';


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ViewTreatment (){

    const ref = useRef();//for pdf downloading
    const options = {
        orientation: 'landscape',
      };
    
// Delete button Function
const onDelete = (id) =>{

  confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => axios.delete(`http://localhost:8070/treatment/delete/${id}`).then((res) =>{
              
            })
        },
        {
          label: 'No',
         
        }
      ]
    });

  
}
   




      


    
    


    
        

    //view all quizzes function//
    const [treatments,setTreatments] = useState([]); //taking all the datas from mongoDB input into this array
    // const params = useParams();
    useEffect(()=>{

            function getTreatment () {
              axios.get("http://localhost:8070/treatment/")
              .then((res)=>{

                
                console.log("your data has been received")
                console.log(res.data)
                
                
                setTreatments(res.data); //using setTreatments function to retrieve data and display on website
                
            
            }).catch((err)=>{
                    alert(err.message);
              })
            }
            getTreatment();
        },[treatments]) //[treatments] to update the array instantly when changed rather than refresh page.

   

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
                     <a class="nav-link" href="/addtreatment">Add a treatment </a>
                   </li>
                   <li class="nav-item active">
                     <a class="nav-link" href="/viewtreatment"><span class="sr-only">(current)</span>View all treatments</a>
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
   
{/* ////////////////////////// View treatments on a table//////////////////// */}
<div className="container">

<div className="form-row">

  <div className="col">
    <h3> Treatment List </h3>
  </div>



  </div>


</div>



<table ref={ref} id="treatmentTable" className="table table-striped" style={{ marginTop: 20 }}>


  <thead>
    <tr>
    
      <th>Animal registration number</th>
      <th>Animal name</th>
      <th>Treatment start date</th>
      <th>treatments</th>
      <th>diesease Description</th>
      <th>Medicine name</th>
      <th>Amount/dose in ml</th>
      <th>medicine No</th>
      <th>times per day</th>
      <th>medication days</th>
      <th>Update</th>
      <th>Delete</th>
      
    </tr>
    </thead>
      <tbody>
      {
        treatments.map((treatment)=>(
          <tr>
            <td>{treatment.AnimalRegNum}</td>
            <td>{treatment.Name}</td>
            <td>{treatment.TreatmentStartDate}</td>
            <td>{treatment.Treatments}</td>
            <td>{treatment.DiseaseDesc}</td>
            <td>{treatment.MedicineName}</td>
            <td>{treatment.AmountPerDose}</td>
            <td>{treatment.MediNo}</td>
            <td>{treatment.NumTimesPerDay}</td>
            <td>{treatment.MedicationDays}</td>
            <td> <a href={`/edittreatment/${treatment._id}`}><button type="/edittreatment" className="btn btn-primary">UPDATE</button> </a> </td>
            <td><a className="btn btn-danger" href="#" onClick={() =>onDelete(treatment._id)}> <i className="far fa-trash-alt"></i>Delete</a></td>
            
          </tr>

        ))
      }
      </tbody>
      
      


  
 
  </table>


    <button  type="button" className="btn btn-info" style={{marginLeft:'30px', marginRight:'0px' }}>
            <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="btn btn-info"
                        table="treatmentTable"
                        filename="treatmentTable"
                        sheet="treatmentTable_details_xls"
                        buttonText="Download treatment list as Excel sheet"
                        style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
                        
        </button>

    <ReactToPdf targetRef={ref} filename="Treatment.pdf" options={options}>
        {({ toPdf }) => (
          <button  onClick={toPdf} className="btn btn-info" style={{ marginLeft: '30px', marginRight: '0px' }}>
            Download Treatment Details as PDF
          </button>
        )}
    </ReactToPdf>


    

  </div>

  


)

}
export default ViewTreatment;