import React from 'react';

import NavBar from './components/shared/NavBar';
import Car from './components/cars/Car';
import Employee from './components/employee/Employee';
import Auth from './components/auth/Auth';
import Home from './components/home/Home';

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
        <Route path="/car" ><Car /></Route>
        <Route path="/employee" ><Employee /></Route>
        <Route path="/auth" ><Auth /></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
      
  );
}

export default App;
