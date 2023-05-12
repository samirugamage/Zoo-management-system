import React ,{useState,useEffect,useRef} from "react"; //useState is needed for functional components
import axios from "axios";
import { Link } from 'react-router-dom';




import ReactHTMLTableToExcel from 'react-html-table-to-excel'; //report generation
import ReactToPdf from 'react-to-pdf';//report generation to pdf


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ViewAnimal (){

  const ref = useRef();//for pdf downlaoding
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
          onClick: () => axios.delete(`http://localhost:8070/animalreg/delete/${id}`).then((res) =>{
              
            })
        },
        {
          label: 'No',
         
        }
      ]
    });

  
}
   

///////add search function//////
// Add a new state for the search term
const [searchTerm, setSearchTerm] = useState("");

// Create a function to handle the search input changes
const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};


    //view all animal function//
    const [animals,setAnimals] = useState([]); //taking all the datas from mongoDB input into this array
    // const params = useParams();
    useEffect(()=>{

            function getAnimal () {
              axios.get("http://localhost:8070/animalreg/")
              .then((res)=>{

                
                console.log("your data has been received")
                console.log(res.data)
                
                
                setAnimals(res.data); //using set function to retrieve data and display on website
                
            
            }).catch((err)=>{
                    alert(err.message);
              })
            }
            getAnimal();
    },[animals]) //[animals] to update the array instantly when changed rather than refresh page.

   

    return (
          <div>
    {/* // --------Top Navigation Start----------------------------------------------------------------------------------------------- */}
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
                      <a class="nav-link" href="/addanimal">Add an aminal </a>
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
        {/* //---------Top Navigation End-------------------------------------------------- */}


  {/* ////////////////////////// View animals on a table//////////////////// */}
  <div className="container">

  <div className="form-row">

    <div className="col">
      <h3> Animal List </h3>

                              {/* search animal by name */}
      <div className="col">
    <input
      type="text"
      className="form-control"
      placeholder="Search animal by name"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  </div>

    </div>
    </div>
  </div>

  <table ref={ref} id="animalTable" className="table table-striped" style={{ marginTop: 20 }}>


    <thead>
      <tr>
      
        <th>Animal Registration Number</th>
        <th>Name</th>
        <th>Birthdate</th>
        <th>country</th>
        <th>Category</th>
        <th>Scientific Name</th>
        <th>Trophic Level</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Gender</th>
        <th>Update</th>
        <th>Delete</th>
        
      </tr>
      </thead>
        <tbody> 
        { 
          animals
          .filter((animal) =>
            animal.Name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((animal)=>(
            <tr>
              <td>
                <Link to={`/treatmentoneanimal/${animal.AnimalRegNum}`}>
                  {animal.AnimalRegNum}
                </Link>
              </td>
              <td>{animal.Name}</td>
              <td>{animal.BirthDate}</td>
              <td>{animal.BornCountry}</td>
              <td>{animal.Category}</td>
              <td>{animal.ScientificName}</td>
              <td>{animal.TrophicLevel}</td>
              <td>{animal.Height}</td>
              <td>{animal.Weight}</td>
              <td>{animal.Sex}</td>
              <td> <a href={`/editanimal/${animal._id}`}><button type="/editanimal" className="btn btn-primary">UPDATE</button> </a> </td>
              <td><a className="btn btn-danger" href="#" onClick={() =>onDelete(animal._id)}> <i className="far fa-trash-alt"></i>Delete</a></td>
              
            </tr>

        ))
      }
      </tbody>
      
      


  
 
  </table>


  <button  type="button" className="btn btn-info" style={{marginLeft:'30px', marginRight:'0px' }}>
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-info"
                    table="animalTable"
                    filename="Animal_Details"
                    sheet="Animal_Details_xls"
                    buttonText="Download Animal Details as excel"
                     style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
                    
                    </button>
                    

        <ReactToPdf targetRef={ref} filename="Animal_Details.pdf" options={options}>
        {({ toPdf }) => (
          <button onClick={toPdf} className="btn btn-info" style={{ marginLeft: '30px', marginRight: '0px' }}>
            Download Animal Details as pdf
          </button>
        )}
      </ReactToPdf>

  </div>

  


)

}
export default ViewAnimal;