import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';


const NavBar = () => {
    return (
        <div className="main-header"> 
            <header className="header-title">
                <h1>Sultan Car Service</h1>
                <small>Best car service in Town</small>
            </header>
            
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/car" exact>Cars</NavLink></li>
                    <li><NavLink to="/Employee" exact>Employees</NavLink></li>
                    <li> <NavLink to="/auth">Login</NavLink></li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    )
}
 
export default NavBar;