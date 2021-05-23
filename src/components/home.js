import React, { useState } from 'react';
import '../App.css';
import front from '../front.jpg'
import leaf from '../leaf.png'
import idea from '../idea.png'
import like from '../like.png'
import lighting from '../lighting.png'
import{Card} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Home ()  {
 

  return (

    <div>
    <div>
    <div className="navbar1">
      <div className="container">
        <div className="row nav5">
          <div className="col-6 mt-3">
              <span style ={{color:"white"}}>My</span><span style={{color:"#43AFFF"}}>Jobs</span>
          </div>
          <div className="col-6 mt-2 ml-auto">
            <div className="align">
             <Link to="/login"> <button>Login/Signup</button></Link>
            </div>
          </div>
        </div>

       <div className="container">
         <div className="row">
         <div className="col-6 mt-3">
           <div className="part1">
         <span style ={{color:"white"}}>Welcome to</span>
         <br/>
            <span style ={{color:"white"}}>My</span><span style ={{color:"#43AFFF"}}>Jobs</span>
        <br/>
        </div>
         <div>
            <button className="part3" type="submit">Get Started</button>
         </div>
        </div>
         <div className="col-6 mt-3 order-sm-1">
                <div className="part2">
                    <img src={front} alt="front"></img>
                </div>
         </div>
        </div>
        </div>
        </div>
        </div>
    <div className="foot">
      <div className="container">
        <div classname="row">
            <div className="col-lg-3 col-sm-12">
                <br/>
                <div className="head">
                    Why Us
                </div>
            </div>
        </div>
        <div className="row ">
          <div className="col-lg-4 col-sm-12 mt-3">
          <Card style={{ width: '20rem',boxShadow:"0px 3px 6px #557DA526" ,borderRadius:"5px"}}>
             <Card.Body>
                <Card.Title style={{color:"#43AFFF",fontSize:"22px",fontWeight:"bold"}}>Get more visibility</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </Card.Text>
   
            </Card.Body>
           </Card>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            
            <Card style={{ width: '20rem',boxShadow:"0px 3px 6px #557DA526" ,borderRadius:"5px"}}>
                <Card.Body>
                    <Card.Title style={{color:"#43AFFF",fontSize:"22px",fontWeight:"bold"}}>Organize your candidates</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
   
                        </Card.Body>
                        </Card>
            
         </div>

          <div className="col-lg-4 col-sm-12 mt-3 ">
                <Card style={{ width: '20rem',boxShadow:"0px 3px 6px #557DA526" ,borderRadius:"5px"}}>
                    <Card.Body>
                        <Card.Title style={{color:"#43AFFF",fontSize:"22px",fontWeight:"bold"}}>Verify their abilities</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Card.Text>
   
                        </Card.Body>
                </Card>
           </div>
        </div>
        <div classname="row">
                <div className="col-lg-12 col-sm-12">
                    <br/>
                <div className="head">
                    Companies Who Trust Us
                </div>
                </div>
        </div>

    <div className="row mt-5 align-items-center">
        <div className="col-3">
          <img src={idea} alt="idea"></img>
             <span style={{color:"black",fontSize:"22px",fontWeight:"bold"}}>Ideaa</span>
         </div>
     <div className="col-3">
            <div className="align">
            <img src={lighting} alt="lighting"></img>
                <span style={{color:"black",fontSize:"22px",fontWeight:"bold"}}>Liva</span>
             </div>
    </div>
    <div className="col-3 ">
          <img src={leaf} alt="leaf"></img>
          <span style={{color:"#43AFFF",fontSize:"22px",fontWeight:"bold"}}>Solyatic</span>
        </div>
    <div className="col-3">
          <img src={like} alt="like"></img>
          <span style={{color:"#43AFFF",fontSize:"22px",fontWeight:"bold"}}>Kanba</span>
    </div>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      
</div>
</div>
</div>
</div>
  );
}

export default Home;