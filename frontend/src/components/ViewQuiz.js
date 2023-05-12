//IT21098246
//Samiru J.G.S


import React ,{useState,useEffect,useRef} from "react"; //useState is needed for functional components
import axios from "axios";
import { Link } from 'react-router-dom'; //for serach function

import ReactHTMLTableToExcel from 'react-html-table-to-excel'; //report generation
import ReactToPdf from 'react-to-pdf';//report generation to pdf


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ViewQuiz (){

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
          onClick: () => axios.delete(`http://localhost:8070/quiz/delete/${id}`).then((res) =>{
              
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


    //view all quizzes function//
    const [quizs,setQuizs] = useState([]); //taking all the datas from mongoDB input into this array
    // const params = useParams();
    useEffect(()=>{

            function getQuizs () {
              axios.get("http://localhost:8070/quiz/")
              .then((res)=>{

                
                console.log("your data has been received")
                console.log(res.data)
                
                
                setQuizs(res.data); //using setQuizs function to retrieve data and display on website
                
            
            }).catch((err)=>{
                    alert(err.message);
              })
            }
            getQuizs();
        },[quizs]) //[quizs] to update the array instantly when changed rather than refresh page.

   

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
   
{/* ////////////////////////// View quizs on a table//////////////////// */}
<div className="container">

<div className="form-row">

  <div className="col">
    <h3> quizzes List </h3>

{/* Add a search input field */}
<div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a question"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

  </div>



  </div>


</div>



<table ref={ref} id="quizTable" className="table table-striped" style={{ marginTop: 20 }}>


  <thead>
    <tr>
    
      <th>Question</th>
      <th>Answer 1</th>
      <th>Answer 2</th>
      <th>Answer 3</th>
      <th>Answer 4</th>
      <th>Answer</th>

      <th>Update</th>
      <th>Delete</th>
      
    </tr>
    </thead>
      <tbody>
      {
        quizs
        .filter((quiz) =>
        quiz.Question.toLowerCase().includes(searchTerm.toLowerCase())
        )
.map((quiz)=>(
          <tr>
            <td>{quiz.Question}</td>
            <td>{quiz.Answer_1}</td>
            <td>{quiz.Answer_2}</td>
            <td>{quiz.Answer_3}</td>
            <td>{quiz.Answer_4}</td>
            <td>{quiz.Answer}</td>
            <td> <a href={`/editquiz/${quiz._id}`}><button type="/editquiz" className="btn btn-primary">UPDATE</button> </a> </td>
            <td><a className="btn btn-danger" href="#" onClick={() =>onDelete(quiz._id)}> <i className="far fa-trash-alt"></i>Delete</a></td>
            
          </tr>

        ))
      }
      </tbody>
      
      


  
 
  </table>


  <button  type="button" className="btn btn-info" style={{marginLeft:'30px', marginRight:'0px' }}>
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-info"
                    table="quizTable"
                    filename="quize_Details"
                    sheet="quiz_details_xls"
                    buttonText="Download quiz Details as excel"
                     style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
                    
  </button>
  <ReactToPdf targetRef={ref} filename="Quiz_Details.pdf" options={options}>
        {({ toPdf }) => (
          <button onClick={toPdf} className="btn btn-info" style={{ marginLeft: '30px', marginRight: '0px' }}>
            Download Quiz Details as pdf
          </button>
        )}
  </ReactToPdf>

  </div>

  


)

}
export default ViewQuiz;