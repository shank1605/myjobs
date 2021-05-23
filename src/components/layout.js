import React, { useState } from 'react';
import '../App.css';
import Login from './login.js'

function Layout ()  {
 

  return (

    <div>
    <div>
    <div className="navbar2">
      <div className="container">
     
       <div className="row nav5">
          <div className="col-6 mt-3">
              <span style ={{color:"white"}}>My</span><span style={{color:"#43AFFF"}}>Jobs</span>
          </div>
          <div className="align">
              <button type="submit">Login/Signup</button>
            </div>
        </div>
        </div>
    </div>

<div className="login2">

  <Login/>
  
  
</div>


    <div className="foot1">
      
        <div className="container">
        <div classname="row">
          <div className="col-lg-3 col-sm-12">
      
            <br/>
          <div className="head">
  
   </div>
</div>
  </div>

         

       
      

        
      
  
  
  
   
   
   
    




  

 
  
</div>
</div>



    </div>
        
     
    </div>
  );
}

export default Layout;