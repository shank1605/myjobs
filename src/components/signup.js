import React, { Component } from "react";
import axios from 'axios';
import "../App.css";
import {
  BrowserRouter as Router,
   Link,Redirect
} from "react-router-dom";
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


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      who: null,
      skills:null,
      email: null,
      password1: null,
      pasword:"",
      direct:false,
      formErrors: {
        firstName: "",
        
        skills:"",
        email: "",
        password1: "",
        pasword: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();


    if (formValid(this.state)) {
      
      const data={
        email:this.state.email,
        userRole:this.state.who,
        password:this.state.password1,
        confirmPassword:this.state.pasword,
        name:this.state.firstName,
        skills:this.state.skills
      }
      
      
        const head={
          headers: { "Content-Type": "application/json; charset=UTF-8" }
        }


        axios.post('/auth/register',data,head)
        .then((response) =>{
          
          

        })
        .catch(function (error) {
          
        });

        alert("SignUp successfully");
          this.setState({direct:true})
  } else {
      alert("Form Inavlid")
    }
   };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
     
      if(value.length < 3 ){
        formErrors.firstName ="minimum 3 characaters required";
      }
      else if(!isNaN(value)){
        formErrors.firstName = "Enter the alphabets";
      }
      else{
        formErrors.firstName ="";
      }
       break;
    
      case "skills":
        if(!isNaN(value)){
          formErrors.skills = "Enter the alphabets";
        }
        else{
          formErrors.skills ="";
        }
        break;

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "password1":
        formErrors.password1 =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
        case "pasword":
          formErrors.pasword =
            value.length < 6 ? "minimum 6 characaters required" : "";
           
            
          break;
    
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    const {password1,pasword} =this.state;
    if(this.state.direct){
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
          <strong>Sign Up</strong>
          <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="ima">I'm</label>
          <div className="ima">
            <div className="recruit">
              <button type="button" onClick={()=>this.setState({who:0})}><span>Recruiter</span></button>
              </div>

              <div className="recruit">
              <button type="button" onClick={()=>this.setState({who:1})}><span>Candidate</span></button>
              
            </div>
          </div>
           <div className="firstName">
              <label htmlFor="firstName">Full Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Full Name"
                type="text"
                name="firstName"
                noValidate
                
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            
           
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password1">
              <label htmlFor="password1">Password</label>
              <input
                className={formErrors.password1.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password1"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password1.length > 0 && (
                <span className="errorMessage">{formErrors.password1}</span>
              )}
            </div>
            <div className="pasword">
              <label htmlFor="pasword"> Confirm Password</label>
              <input
                className=""
                placeholder="Password"
                type="password"
                name="pasword"
                noValidate
                onChange={this.handleChange}
              />
              {pasword.length > 0 && password1 === pasword &&(
                <span className="successMessage">Password is Same</span>
              )}
            </div>
            <div className="skills">
              <label htmlFor="skills">Skills</label>
              <input
                className={formErrors.skills.length > 0 ? "error" : null}
                placeholder="Skills"
                type="text"
                name="skills"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.skills.length > 0 && (
                <span className="errorMessage">{formErrors.skills}</span>
              )}
            </div>
                

            <div className="createAccount">
              <button >Sign Up</button>
              
            </div>
          </form>

          <div className="footsign">
            Have An Account?<span style={{color:"#43AFFF"}}><Link to="/login"  style={{textDecoration:"none"}}>Login</Link></span>
          </div>
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

export default Signup;