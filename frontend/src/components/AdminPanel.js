import React, { Component } from 'react'
export default class AdminPanel extends Component {
    render() {
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
                     <a class="nav-link" href="/">Home</a>
                   </li>
                   <li class="nav-item ">
                     <a class="nav-link" href="/attemptquestion">Take a quiz </a>
                   </li>
                   <li class="nav-item active">
                     <a class="nav-link" href="/events"><span class="sr-only">(current)</span>Events</a>
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

            <div>
       
                <center> <h2> <b>Welcome to Zoo Management System</b> </h2></center>
                <center> <h4>ADMIN PANEL </h4></center>

            <br/><br/>
            </div>
                <center>
                
            <div style={{backgroundColor:"white"}}>
                <div id="band" className="container text-center" style={{backgroundColor:"white"}}>
                
                    <br/>
                    <div className="row">
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Quiz Management</i></h3></strong></p>
                        <a  href="/viewquiz">
                            <img src="../img/quizadmin.jpg" className="img-circle person" alt="" width="150" height="150"/>
                        </a>
                    <br/><br/><br/>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Animal Management</i></h3></strong></p>
                        <a  href="/viewanimal">
                            <img src="../img/animal.png" className="img-circle person" alt="" width="250" height="150"/>
                        </a>
                    <br/><br/><br/>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Treatment Management</i></h3></strong></p><br/>
                        <a  href="/viewtreatment">
                            <img src="../img/treatment.png" className="img-circle person" alt="" width="180" height="150"/>
                        </a>
                    <br/><br/>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Food Management</i></h3></strong></p><br/>
                        <a  href="/viewfood">
                            <img src="../img/food.jpg" className="img-circle person" alt="" width="180" height="150"/>
                        </a>
                    <br/><br/>
                    </div>

                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Event Management</i></h3></strong></p><br/>
                        <a  href="/viewevent">
                            <img src="../img/event.jpg" className="img-circle person" alt="" width="180" height="150"/>
                        </a>
                    <br/><br/>
                    </div>
                    

                    </div>  
                </div> 
            </div>
            </center>
            
        </div> 
             
  

  
            )
}
}