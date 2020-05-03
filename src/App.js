import React, { Component } from 'react';

import NavBar from './components/shared/NavBar';
import Car from './components/cars/Car';
import Employee from './components/employee/Employee';
import EmployeeForm from './components/employee/EmployeeForm';
import EmployeeEdit from './components/employee/EmployeeEdit';
import EmployeeDetails from './components/employee/EmployeeDetails';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import CarForm from './components/cars/CarForm';
import CarDetails from './components/cars/CarDetails';
import CarEdit from './components/cars/CarEdit';

import './index.css'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';



class App extends Component{


  state = {
    user: false
  }

  // Check if credentials are in local storage
  // returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    localStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () => {
  // removes what is in localStorage when the user logs out and updates state for cars
      // localStorage.clear() removes everything in local storage
      localStorage.removeItem("credentials")

      this.setState({user: this.isAuthenticated})
  }

  componentDidMount(){
    this.setState({
      user: this.isAuthenticated()
    })
  }


  render(){
    return (
      <Router>

        <NavBar user={this.state.user} clearUser={this.clearUser} />

        <Switch>

        <Route path="/" exact render={(props) => {
            return <Home /> }} />
          }} />

          <Route path="/car/new" render={(props) => {
            return <CarForm {...props} /> }} />
          }} />


          <Route path="/employee/new" render={(props) => {
            return <EmployeeForm {...props} /> }} />
          }} />

          <Route path="/employee/:employeeId/edit" render={(props) => {
            return <EmployeeEdit {...props} /> }} />
          }} />
          <Route path="/employee/:employeeId" render={(props) => {
            return <EmployeeDetails {...props} /> }} />
          }} />

          <Route path="/employee" render={(props) => {
            return <Employee {...props} /> }} />
          }} />
          
          <Route path="/car/:carId/edit" render={(props) => {
            return <CarEdit {...props} /> }} />
          }} />
          <Route path="/car/:carId" render={(props) => {
            return <CarDetails {...props} /> }} />
          }} />
          
          <Route path="/car" render={(props) => {
            return <Car {...props} /> 
            }} />
            <Route path="/auth" render={(props) => {
            return <Login setUser={this.setUser} {...props} /> 
            }} />
          <Redirect to="/" />
        </Switch>
      </Router>
        
    );
 }
}

export default App;
