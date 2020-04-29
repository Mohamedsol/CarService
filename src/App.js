import React from 'react';

import NavBar from './components/shared/NavBar';
import Car from './components/cars/Car';
import Employee from './components/employee/Employee';
import Auth from './components/auth/Auth';

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
        <Route path="/car" exact><Car /></Route>
        <Route path="/employee" ><Employee /></Route>
        <Route path="/auth" ><Auth /></Route>
      </Switch>
    </Router>
      
  );
}

export default App;
