import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";
import axios from 'axios';

import "../App.css";





const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

 
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


class Postjob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Jobtitle: null,
      Description: null,
      Location:null,
      jobs:false,
      home:false,
      formErrors: {
        Jobtitle: "",
        Description: "",
        Location:""
      }
    };
  }

handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {

     const data={
        title:this.state.Jobtitle,
        description:this.state.Description,
        location:this.state.Location
      } 
      console.log(data)
      
      const head={
        headers: { Authorization: localStorage.getItem("token")}
      }
       axios.post('/jobs/',data,head)
          .then((response) =>{
        console.log(response);
        this.setState({jobs:true})
        alert("Successfully Posted")
        })
      .catch(function (error) {
        console.log(error);
      })
    }
    else 
    {
      alert("Form Inavlid")
    }
   };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "Jobtitle":
     
      if(value.length < 3 ){
        formErrors.Jobtitle ="minimum 3 characaters required";
      }
      
      else{
        formErrors.Jobtitle ="";
      }
       break;
    
      case "Description":
        if(value.length < 3 ){
          formErrors.Description ="minimum 3 characaters required";
        }
        
        else{
          formErrors.Description ="";
        }
         break;
        break;
      case "Location":
        formErrors.Location =
          value.length < 3 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    if(this.state.home){
      return <Redirect to="/"/>
    }
    if(this.state.jobs){
      return <Redirect to="/post"/>
    }

const token=localStorage.getItem("token");
if(token==null){
  return <Redirect to="/"/>

}
    

    return (
<>
      <div>
      <div className="navbar2">
        <div className="container">
       
         <div className="row nav5">
            <div className="col-6 mt-3">
                <span style ={{color:"white"}}>My</span><span style={{color:"#43AFFF"}}>Jobs</span>
            </div>
            <div className="col-6 mt-2 logout ">
           
           <div className="align2">
             <button  onClick={()=>{
               
               localStorage.removeItem("token")
              this.setState({home:true})
           }}>Logout</button>
           </div>

           <Link to="/postjob" style={{textDecoration:"none"}}><div className="applied">
             Post a job
           </div>
           </Link>
      </div>
    </div>
  </div>
</div>
      <div className="wrapper">
        <div className="form-wrapper">
          <strong style={{textAlign:'center'}}>Post a Job</strong>
          <form onSubmit={this.handleSubmit} noValidate>
             <div className="firstName">
              <label htmlFor="firstName">Job Title</label>
              <input
                className={formErrors.Jobtitle.length > 0 ? "error" : null}
                placeholder="Enter job title"
                type="text"
                name="Jobtitle"
                noValidate
                
                onChange={this.handleChange}
              />
              {formErrors.Jobtitle.length > 0 && (
                <span className="errorMessage">{formErrors.Jobtitle}</span>
              )}
            </div>
       <div className="password">
              <label htmlFor="password">Description</label>
              <input style={{height:'100px'}}
                className={formErrors.Description.length > 0 ? "error" : null}
                placeholder="Description"
                type="text"
                name="Description"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Description.length > 0 && (
                <span className="errorMessage">{formErrors.Description}</span>
              )}
            </div>
            <div className="skills">
              <label htmlFor="skills">Location</label>
              <input
                className={formErrors.Location.length > 0 ? "error" : null}
                placeholder="Location"
                type="text"
                name="Location"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Location.length > 0 && (
                <span className="errorMessage">{formErrors.Location}</span>
              )}
            </div>
        <div className="createAccount">
              <button >Post</button>
        </div>
          </form>
        </div>
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
     </>
    );
  }
}

export default Postjob;