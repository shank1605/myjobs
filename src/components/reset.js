import React, { Component } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";

import "../App.css";



const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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


class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login:false,
      password: "",
      password1:"",
      

      formErrors: {
        email: "",
        password: "",
        password1:""
      },
    };
  }

 handleSubmit = e => {
    e.preventDefault();
if (formValid(this.state)) {
const token = localStorage.getItem("token1")

      const data={
        password:this.state.password,
        confirmPassword:this.state.password1,
        token:token
      }
     
      axios.post('/auth/resetpassword',data)
      .then((response) =>{
        
        this.setState({login :true})
        alert("Password Reset Successfully")
        })
      .catch(function (error) {
        
        });
      
      } else {
      alert("Incorrect password")
    }
    };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
    case "password":
      formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
     
        
        case "password1":
       console.log(this.state.password);
       console.log(this.state.password1);
        formErrors.password1 =
        value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    const {password,password1} =this.state;
    if(this.state.login){
      return <Redirect to="/login"/>
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
          
        </div>
        </div>
    </div>
      
      <div className="wrapper">
      <div className="form-wrapper">
          <strong>Reset Your Password</strong>
          <form onSubmit={this.handleSubmit} noValidate>
            <h6>Enter Your Password Below</h6>
              <div className="password">
              <label htmlFor="password">New Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Confirm Your Password</label>
              <input
                className=""
                placeholder="Password"
                type="password"
                name="password1"
                noValidate
                onChange={this.handleChange}
              />
              {password1.length > 0 && password === password1 &&(
                <span className="successMessage">Password is same</span>
              )}
            </div>
           <div className="createAccount">
              <button >Reset</button>
              
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

export default Reset;