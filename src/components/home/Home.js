import React from 'react';
import HomeImage from './Home.jpg';
import './Home.css';




const Home = () => {
    return (
        <React.Fragment>
          <div className="Home-body">
          <img src={HomeImage} alt="Service Garage" id="homeImage"></img>
          <div id="homeAddress">
            Visit Us at the Nashville  Location
            <br />
            <br />2020 Car Way
            <br />Nashville, TN 37208
            <br />(615) 123-4444
            <br />Open from 8am-8pm
            <br />Email: info@CarService.com
          </div>
          <p className="footer">
            Copyright &copy;{new Date().getFullYear()}. All Rights Reserved By <b>Mohamed Soltani.</b>
          </p>
          </div>
        </React.Fragment>
      );
    }

 
export default Home;