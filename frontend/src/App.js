import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Quiz
import AdminPanel from './components/AdminPanel';
import AddQuiz from './components/AddQuiz';
import EditQuiz from './components/EditQuiz';
import ViewQuiz from './components/ViewQuiz';

import AttemptQuestion from './components/AttemptQuestion';
import Homepage from './components/Homepage';

//animal
import AddAnimal from './components/AddAnimal';
import ViewAnimal from './components/ViewAnimal';
import EditAnimal from './components/EditAnimal';


import AddTreatment from './components/AddTreatment';
import ViewTreatment from './components/ViewTreatment';
import EditTreatment from './components/EditTreatment'; 
import TreatmentOneAnimal from './components/TreatmentOneAnimal';



//food 
import AddFood from './components/AddFood';
import ViewFood from './components/ViewFood';
import EditFood from './components/EditFood';


import AddFoodGiven from './components/AddFoodGiven';
import AddFoodBought from './components/AddFoodBought';

//customer events
import CustomerEvents from './components/CustomerEvents';
import ViewEvent from './components/ViewEvent';
import EditEvent from './components/EditEvent';





import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>

          {/* Quiz */}
          <Route exact path="/addquiz" element={<AddQuiz/>}/>
          <Route exact path="/editquiz/:id" element={<EditQuiz/>}/>
          <Route exact path="/viewquiz" element={<ViewQuiz/>}/>

          <Route exact path="/attemptquestion" element={<AttemptQuestion/>}/>
          <Route exact path="/" element={<Homepage/>}/>
          <Route  exact path="/AdminPanel" element={<AdminPanel/>}/>

          {/* animals */}
          <Route exact path="/addanimal" element={<AddAnimal/>}/>
          <Route exact path="/viewanimal" element={<ViewAnimal/>}/>
          <Route exact path="/editanimal/:id" element={<EditAnimal/>}/>

          <Route exact path="/addtreatment" element={<AddTreatment/>}/>
          <Route exact path="/viewtreatment" element={<ViewTreatment/>}/>
          <Route exact path="/edittreatment/:id" element={<EditTreatment/>}/>
          <Route exact path="/treatmentOneAnimal/:AnimalRegNum" element={<TreatmentOneAnimal/>} />


          {/* Food */}
          <Route exact path="/addfood" element={<AddFood/>}/>
          <Route exact path="/viewfood" element={<ViewFood/>}/>
          <Route exact path="/editfood/:id" element={<EditFood/>}/>

          <Route exact path="/addfoodgiven" element={<AddFoodGiven/>}/>
          <Route exact path="/addfoodbought" element={<AddFoodBought/>}/>

          {/* Customer Events */}
          <Route exact path="/events" element={<CustomerEvents/>}/>
          <Route exact path="/viewevent" element={<ViewEvent/>}/>
          <Route exact path="/editevent" element={<EditEvent/>}/>








       </Route>
     </Routes>
     
    
  
    <ToastContainer position="top-center" autoClose={4000}></ToastContainer>
    </BrowserRouter>
    
  );
}

export default App;
