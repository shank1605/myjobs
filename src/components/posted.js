import React, { useState,useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import{Button,Card,Modal} from 'react-bootstrap'
import pin from '../pin.png'
import home from '../home.png'
import {Link,Redirect} from "react-router-dom";

function Posted ()  {
  const [show, setShow] = useState(false);
  const [home1, setHome] = useState(false);
  const [data,setdata]=useState([]);
  const [app,setapp]=useState([]);
  const [id,setid]=useState([]);
  const handleClose = () => setShow(false);
  function handleShow(i) {
    setid(i)
    setShow(true);
    

    const head={
      headers: { Authorization: localStorage.getItem("token")}
    }
    
    axios.get(`/recruiters/jobs/${id}/candidates`,head)
    .then((response) =>{
     
    setapp(response.data.data);
     })
   .catch(function (error) {
     
   })
  }


  useEffect(()=>{
    const head={headers: { Authorization: localStorage.getItem("token")}}
    
    axios.get('/recruiters/jobs',head)
    .then((response) =>{
    console.log() 
     setdata(response.data.data.data);
    },[])
   .catch(function (error) {
  
    
   })
  },[])



if(home1){
  return <Redirect to="/"/>
}
const token=localStorage.getItem("token");
if(token==null){
  return <Redirect to="/"/>

}
 

  return (
   <>
    <div>
    <div className="navbar3">
      <div className="container">
        <div className="row nav5">
          <div className="col-6 mt-3">
              <span style ={{color:"white"}}>My</span><span style={{color:"#43AFFF"}}>Jobs</span>
          </div>
          <div className="col-6 mt-2 logout ">
          <div className="align2">
              <button  onClick={()=>{localStorage.removeItem("token")
               setHome(true);
            }}>Logout</button>
            </div>
            <Link to="/postjob" style={{textDecoration:"none"}}><div className="applied">
              Post a job
            </div>
            </Link>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <span ><img src={home} style ={{marginLeft:'50px',marginTop:'10px',width:'15px',height:'15px',cursor:'pointer'}}/>
        </span>
        </div>
        <div className="col-lg-6 col-sm-12 job">
          <b style ={{color:'white'}}>Jobs Posted By You</b>
        </div>
        </div>
    </div>
<div className="part4">
<div className="login1">
  
{data.map((arr)=>{
return(
<Card  key={arr.id} style={{ width: '18rem',marginLeft:'50px',marginTop:"40px" }} >
  
  <Card.Body>
    <Card.Title>{arr.title}</Card.Title>
    <Card.Text>
    {arr.description}
    </Card.Text>
   <span> <img src={pin} style ={{width:'20px',height:'20px'}}/>{arr.location}</span>
   <Button style={{float:'right',backgroundColor:'#43AFFF33',color:"black"}}variant="primary" onClick={()=>handleShow(arr.id)}>View Applications</Button>
   
  </Card.Body>
</Card>
)
})}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Applicants for this Job</Modal.Title>
          
        </Modal.Header>
        &nbsp;&nbsp;&nbsp;Total&nbsp;&nbsp;Applicants
        <Modal.Body>
<>
{app.map((a)=>{
  return(
        <Card  key={a.id} style={{ width: '14rem',display: 'flex',flexWrap:'wrap'}}>
  
        <Card.Body key={a.id}>
            <Card.Title>{a.name}</Card.Title>
                <Card.Text>
                       {a.email}
                </Card.Text>
                <Card.Text>
                        {a.skills}
                </Card.Text>
   
   
   
                </Card.Body>
          </Card>

)})}
          
</>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
  </Modal>
</div>
</div>
 </div>
  </>
  );
}

export default Posted;