import React, { Component } from 'react';
import axios from 'axios'
import CarItem from './CarItem';


class Car extends Component {
   
    state = { 
        cars: []
     }
    

     componentDidMount() {
        this.Fetch();
    }

    Fetch() {
        axios.get('http://localhost:5002/cars')
        .then((response) => {
            this.setState({
            cars: response.data
            })
        })
    }

    render() { 
        
        return ( 
            <ul className="cars-list">
            {this.state.cars.map(car => {
                return  <CarItem  id={car.id} model={car.model} color={car.color} image={car.image} description={car.description}/> 
             })}
            </ul>
         );
    }
}
 
export default Car;
 
