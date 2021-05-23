import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home.js'
import "./App.css";
import Login from './components/login.js'
import Signup from './components/signup.js'
import Layout from './components/layout.js'
import Forget from './components/forget.js'
import Jobs from './components/jobs.js'
import Posted from './components/posted.js'
import Reset from './components/reset.js'
import Postjob from './components/postjob.js'
import Applied from './components/applied.js'







class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      }
    };


  

    
     
  

    
 
  render() {
    
    

    return (

      
      <Switch>
        <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/forget">
        <Forget/>
      </Route>
      <Route path="/job">
        <Jobs/>
      </Route>
      <Route path="/post">
        <Posted/>
      </Route>
      <Route path="/reset">
        <Reset/>
      </Route>
      <Route path="/postjob">
        <Postjob/>
      </Route>
      <Route path="/applied">
        <Applied/>
      </Route>
     
     
    </Switch>


      
      
      
          

        
          
      
      
    );
  }
}

export default App;