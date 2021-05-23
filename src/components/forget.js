import React, { Component } from "react";
import axios from 'axios';
import {Redirect} from "react-router-dom";
import "../App.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class Forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reset:false,
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

 handleSubmit = e => {
    e.preventDefault();
      axios.get('/auth/resetpassword',{
        params: {
          email: this.state.email
        }
      })
      .then((response) =>{
        console.log(response.data.data.token);
        const token = response.data.data.token;
        localStorage.setItem("token1",token);
        this.setState({reset:true})
        })
      .catch(function (error) {
        console.log(error);
        }); 
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
        break;}
      this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    if(this.state.reset){
      return <Redirect to="/reset"/>
    }
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
          <strong>Forget Your Password?</strong>
          <h6>Enter the email associated with your account and we’ll send you instructions to reset your password.</h6>
          <form onSubmit={this.handleSubmit} noValidate>
             <div className="email">
              <label htmlFor="email">Email Address</label>
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
            <div className="createAccount">
              <button >Submit</button>
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
  </div>
    );
  }
}

export default Forget;