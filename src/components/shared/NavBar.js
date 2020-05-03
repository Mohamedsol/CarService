import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './NavBar.css';



class NavBar extends Component {


    handleLogout = () => {
        //clears user from localStorage and redirects to home page
        this.props.clearUser();
        this.props.history.push('/');
        window.location.reload(false);
    
    }
    render(){
        return (
            <div className="main-header"> 
                <header className="header-title">
                    <h1>Sultan Car Service</h1>
                    <h3><i>Best car service in Town!</i></h3>
                </header>
                <span></span>
                <nav>
                    <ul className="nav-links">
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        {(this.props.user) ? 
                        <>
                        <li><NavLink to="/car" exact>Cars</NavLink></li>
                        <li><NavLink to="/Employee" exact>Employees</NavLink></li>
                        <li><a onClick={this.handleLogout}>Logout</a></li>
                        </>
                        :
                        <li> <NavLink to="/auth">Login</NavLink></li>
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}
 
//use withRouter() when you can't use the Route component
export default withRouter(NavBar);