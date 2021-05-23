import React, { useState ,useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import{Card} from 'react-bootstrap'
import pin from '../pin.png'
import home from '../home.png'
import { Redirect} from 'react-router';


function Applied ()  {
  const [home1,setHome]=useState(false);
  const [data,setdata]=useState([]);
  useEffect(()=>{

    const head={headers: { Authorization: localStorage.getItem("token")}}
    axios.get('/candidates/jobs/applied',head)
    .then((response) =>{
     console.log(response);
     setdata(response.data.data);
    })
   .catch(function (error) {
    console.log(error);
   })
  },[])

  if(home1)
    {
    return <Redirect to="/"/>
    }

    const token=localStorage.getItem("token");
    if(token==null){
      return <Redirect to="/"/>
    
    }

  
  return (
 
    <div>
      <div className="navbar3">
      <div className="container">
      <div className="row nav5">
          <div className="col-6  mt-3">
              <span style ={{color:"white"}}>My</span><span style={{color:"#43AFFF"}}>Jobs</span>
          </div>
          <div className="col-6 mt-2 logout ">
            <div className="align2">
              <button  onClick={()=>{localStorage.removeItem("token")
               setHome(true);}}>Logout</button>
            </div>
            <div className="applied">
              Applied Jobs
            </div>
            </div>
        </div>
        <div className="col-lg-6 col-sm-12">
        <span ><img src={home} style ={{marginLeft:'50px',marginTop:'10px',width:'15px',height:'15px',cursor:'pointer'}}/>
        </span>
        </div>
        <div className="col-lg-6 col-sm-12 job">
            <b style ={{color:'white'}}>Jobs Applied By You</b>
        </div>
        </div>
    </div>
    <div className="part4">
      <div className="login1">
        {data.map((ar)=>{
          return(
            <Card key ={ar.id} style={{ width: '18rem',marginLeft:'50px',marginTop:"40px" }}>
               <Card.Body>
                   <Card.Title>{ar.title}</Card.Title>
                    <Card.Text>
                      {ar.description}
                    </Card.Text>
                      <span> <img src={pin} style ={{width:'20px',height:'20px'}}/>{ar.location}</span>
   
                </Card.Body>
              </Card>
              )})}
          </div>
         </div>
        </div>
      );
    }
  export default Applied;