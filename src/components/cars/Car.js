import React, { Component } from 'react';
import axios from 'axios'
import CarItem from './CarItem';
import './Car.css'



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

    deleteCar = id => {
        axios.delete('http://localhost:5002/cars/' + id)
        .then(() => {
            this.Fetch()
        });     
    }

    render() { 
        console.log('props', this.props)
        return ( 
            <React.Fragment>
                <section className = "section-content" >
                    <button type="button" className="btn"
                    onClick={() => { this.props.history.push("/car/new") }}>
                    + Add Car
                    </button>
                </section >
                <div className="container-cards">
                {this.state.cars.map(car => {
                    return  <CarItem  
                    id={car.id} 
                    model={car.model} 
                    image={car.image} 
                    description={car.description}
                    deleteCar={this.deleteCar}/> 
                })}
                </div>
            </React.Fragment>
         );
    }
}
 
export default Car;
 
