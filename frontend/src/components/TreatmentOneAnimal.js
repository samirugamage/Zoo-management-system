import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ReactToPdf from 'react-to-pdf';



function TreatmentOneAnimal() {
  const { AnimalRegNum } = useParams();
  const [treatments, setTreatments] = useState([]);
  const ref = useRef();
  const options = {
    orientation: 'landscape',
  };

  useEffect(() => {
    async function fetchTreatments() {
      try {
        const response = await axios.get(
          `http://localhost:8070/treatment/animal/${AnimalRegNum}`
        );
        setTreatments(response.data.treatments);
      } catch (err) {
        console.log(err);
      }
    }

    fetchTreatments();
  }, [AnimalRegNum]);

  

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
  <table ref={ref} id="treatmentTable" className="table table-striped">
        <thead>
          <tr>
            <th>Animal registration number</th>
            <th>Animal name</th>
            <th>Treatment start date</th>
            <th>Treatments</th>
            <th>Disease Description</th>
            <th>Medicine name</th>
            <th>Amount/dose in ml</th>
            <th>medicine No</th>
            <th>Times per day</th>
            <th>Medication days</th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((treatment) => (
            <tr key={treatment._id}>
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
            </tr>
          ))}
        </tbody>
      </table>

</div>






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
export default TreatmentOneAnimal;