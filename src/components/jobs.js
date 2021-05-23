import React, { useState,useEffect } from 'react';
import '../App.css';
import{Button,Card} from 'react-bootstrap'
import pin from '../pin.png'
import home from '../home.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";
import axios from 'axios';
function Jobs ()  {


  
const [home1,setHome]=useState(false)
const [data1,setdata]=useState([])
const [id,setid]=useState("")


useEffect(()=>{
  axios.get('/jobs')
  .then((response) =>{
   console.log(response.data.data);
   setdata(response.data.data);
   })
 .catch(function (error) {
    console.log(error);
  })},[])

  if(home1){
   return <Redirect to="/"/>
 }
const submit=(i)=>{
  setid(i);
  console.log(id);
  const data={
  jobId:id
  }
console.log(data);
  const head={headers: { Authorization: localStorage.getItem("token")}}
  console.log(localStorage.getItem("token"))
  axios.post('/candidates/jobs',data,head)
  .then((response) =>{
    console.log(response);
   alert("Applied Successfully")
    })
  .catch(function (error) {
    console.log(error);
  });
  }
  const token=localStorage.getItem("token");
  if(token==null){
    return <Redirect to="/"/>
  
  }

  
return (
<div>
    <div>
    <div className="navbar3">
      <div className="container">
        <div className="row nav5">
          <div className="col-6 mt-3">
              <span style ={{color:"white"}}>My</span><span style={{color:"#43AFFF"}}>Jobs</span>
          </div>
          <div className="col-6 mt-2 logout ">
           <div className="align2">
              <button  onClick={()=>{ localStorage.removeItem("token")
               setHome(true);
            }}>Logout</button>
            </div>
            <Link to="/applied" style={{textDecoration:"none"}}><div className="applied">
              Applied Jobs
            </div>
            </Link>
             </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <span ><img src={home} style ={{marginLeft:'50px',marginTop:'10px',width:'15px',height:'15px',cursor:'pointer'}}/></span>
        </div>
        <div className="col-lg-6 col-sm-12 job">
        <b style ={{color:'white'}}>Jobs For You</b>
          </div>
          </div>
        </div>
      <div className="part4">
        <div className="login1">
          {data1.map((arr)=>{
              return(
                <Card  key={arr.id} style={{ width: '18rem',marginLeft:'50px',marginTop:"40px" }}>
                  <Card.Body>
                    <Card.Title>{arr.title}</Card.Title>
                      <Card.Text>
                          {arr.description}
                      </Card.Text>
                        <span> <img src={pin} style ={{width:'20px',height:'20px'}}/>{arr.location}</span>
                           <Button onClick={()=>submit(arr.id)}style={{float:'right',backgroundColor:'#43AFFF33',color:"black"}}variant="primary">Apply</Button>
                   </Card.Body>
                  </Card>

)})}
</div>
</div>
 </div>
</div>
  );
}

export default Jobs;