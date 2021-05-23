import React, { Component } from "react";
import axios from 'axios';
import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      recruit:false,
      candidate:false,
      correct:false,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    let formErrors = { ...this.state.formErrors };

    if (formValid(this.state)) {
      const data ={
        email:this.state.email,
        password:this.state.password
      }
      const head={
          headers: { "Content-Type": "application/json; charset=UTF-8" }
        }
        axios.post('/auth/login',data,head)
        .then((response) =>{
          this.setState({correct:true})
          console.log(response.data.data.userRole);
          console.log(response.data.data.token)
          const role=response.data.data.userRole;
          const token = response.data.data.token;
          localStorage.setItem("token",token);
          if(role === 0)
            this.setState({recruit:true})
          else
            this.setState({candidate:true})
          alert("login Successfully");
           })
        .catch(function (error) {
          console.log(error);
          alert("Incorrect Email or Password ")
          });
        } else {
      alert("Form Inavlid")
    }
   };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
     case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    if(this.state.recruit){
      return <Redirect to="/post"/>;
    }
    if(this.state.candidate){
      return <Redirect to="/job"/>;
    }
    
console.log(this.state.formErrors);
    return (

      <div>
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
          <strong>Login</strong>
          <form onSubmit={this.handleSubmit} noValidate>
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
            <div className="password">
              <label htmlFor="password">Password</label>
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
               <Link to="/forget" style={{textDecoration:"none"}}><span style={{color:"#43AFFF"}}>Forget Password</span></Link>
          </div>
           <div className="createAccount">
              <button >Login</button>
              
            </div>
          </form>
          <div className="footsign">
            New to the Jobs?<Link to="/signup" style={{textDecoration:"none"}}><span style={{color:"#43AFFF"}}>Create an Account</span></Link>
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
</div>
    );
  }
}

export default Login;