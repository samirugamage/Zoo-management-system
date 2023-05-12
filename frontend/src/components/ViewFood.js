import React, { useState, useEffect } from "react";

import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom'; //search function

function ViewFood() {
  const [foods, setFoods] = useState([]);
  const [foodBoughts, setFoodBoughts] = useState([]);
  const [foodGivens, setFoodGivens] = useState([]);

  // Delete button Function
  const onDelete = (fid) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            // Create an array of axios delete requests
            const deleteRequests = [
              axios.delete(`http://localhost:8070/food/delete/${fid}`),
              axios.delete(`http://localhost:8070/foodbought/delete/${fid}`),
              axios.delete(`http://localhost:8070/foodgiven/delete/${fid}`),
            ];
  
            // Execute all delete requests at once
            Promise.all(deleteRequests)
              .then((responses) => {
                // All requests completed successfully
                console.log("All delete requests completed successfully:", responses);
              })
              .catch((error) => {
                // An error occurred in one of the requests
                console.error("Error in one of the delete requests:", error);
              });
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };
  

///////add search function//////
// Add a new state for the search term
const [searchTerm, setSearchTerm] = useState("");

// Create a function to handle the search input changes
const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};


  useEffect(() => {
    function getFoods() {
      axios
        .get("http://localhost:8070/food/")
        .then((res) => {
          console.log("Food data has been received");
          console.log(res.data);
          setFoods(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    function getFoodBoughts() {
      axios
        .get("http://localhost:8070/foodBought/")
        .then((res) => {
          console.log("FoodBought data has been received");
          console.log(res.data);
          setFoodBoughts(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    function getFoodGivens() {
        axios
          .get("http://localhost:8070/foodGiven/")
          .then((res) => {
            console.log("FoodGiven data has been received");
            console.log(res.data);
            setFoodGivens(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      
      getFoodGivens();
      

    getFoods();
    getFoodBoughts();
  }, []);

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
                     <a class="nav-link" href="/addfood">Add a Food Item </a>
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
  

      {/* Food List */}
<div className="container">
<center><h3>Food Item List</h3></center>

{/* Add a search input field */}
<div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by food name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

  <div style={{ display: 'flex', justifyContent: 'center' }}>
  
    <table
      className="table table-striped"
      style={{ marginTop: 20, width: '60%' }}
    >
      <thead>
        <tr>
          <th>Food ID</th>
          <th>Name</th>
          <th>Remaining Weight</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {foods
         .filter((food) =>
         food.name.toLowerCase().includes(searchTerm.toLowerCase())
         ).map((food) => (
          <tr key={food._id}>
            <td>{food.fid}</td>
            <td>{food.name}</td>
            <td>{food.remainingWeight}</td>
            <td><td> <a href={`/editfood/${food._id}`}><button type="/editfood" className="btn btn-primary">UPDATE</button> </a> </td></td>
            <td>
              <a
                className="btn btn-danger"
                href="#"
                onClick={() => onDelete(food.fid)}
              >
                {' '}
                <i className="far fa-trash-alt"></i>Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      <br></br><br></br>
      {/* Container for both tables */}
<div className="container">
  <div className="row">
    {/* FoodBought List */}
    <div className="col-md-6">
      <h3>Food Bought List</h3>
      <button className="btn btn-success mb-3" onClick={() => window.location.href = "http://localhost:3000/addfoodbought"}>Add Record</button>

      <table className="table table-striped table-hover" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Food ID</th>
            <th>Name</th>
            <th>Food Bought (kg)</th>
          </tr>
        </thead>
        <tbody>
          {foodBoughts
         .filter((foodBought) =>
         foodBought.name.toLowerCase().includes(searchTerm.toLowerCase())
         ).map((foodBought) => (
            <tr key={foodBought._id}>
              <td>{foodBought.fid}</td>
              <td>{foodBought.name}</td>
              <td>{foodBought.foodsBoughtKg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* FoodGiven List */}
    <div className="col-md-6">
      <h3>Food Given List</h3>
      <button className="btn btn-success mb-3" onClick={() => window.location.href = "http://localhost:3000/addfoodgiven"}>Add Record</button>
      <table className="table table-striped table-hover" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Food ID</th>
            <th>Name</th>
            <th>Food Given (kg)</th>
          </tr>
        </thead>
        <tbody>
          {foodGivens
         .filter((foodGiven) =>
         foodGiven.name.toLowerCase().includes(searchTerm.toLowerCase())
         ).map((foodGiven) => (
            <tr key={foodGiven._id}>
              <td>{foodGiven.fid}</td>
              <td>{foodGiven.name}</td>
              <td>{foodGiven.foodsGivenKg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  <br></br>
  <br></br>
</div>


    </div>
  );
}

export default ViewFood;
