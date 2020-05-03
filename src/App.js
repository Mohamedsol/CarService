import React from 'react';

import NavBar from './components/shared/NavBar';
import Car from './components/cars/Car';
import Employee from './components/employee/Employee';
import EmployeeForm from './components/employee/EmployeeForm';
import EmployeeEdit from './components/employee/EmployeeEdit';
import EmployeeDetails from './components/employee/EmployeeDetails';
import Auth from './components/auth/Auth';
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



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact><Home /></Route>

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
        <Route path="/auth" ><Auth /></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
      
  );
}

export default App;
