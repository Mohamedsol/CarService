import React, {Component} from 'react';
import axios from 'axios';

class CarDetails extends Component {
    
    state = {
        car:'',
        loadingStatus: true,
        carId: this.props.match.params.carId
    }

    componentDidMount() {
        this.Fetch();
    }

    Fetch() {
        const carId = this.props.match.params.carId;
        axios.get('http://localhost:5002/cars/'+ carId)
        .then((response) => {
            this.setState({
            car: response.data,
            loadingStatus: false

            })
        })
    }

    
    deleteCar = () => {
        const carId = this.props.match.params.carId;
        axios.delete('http://localhost:5002/cars/' + carId).then(() => {
            this.props.history.push("/car")
        });     
    }
    
    
    render() {
        console.log(this.state.car)
        
    return ( 
      <div className="card-detlais">
        <div className="card card-de">
            <div className="card-de">
            <picture>
            <img src={`${this.state.car.image}`} alt="car" />
            </picture>
            <h3>Model: {this.state.car.model}</h3>
            <p>Description: {this.state.car.description}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.deleteCar}>Discharge</button>
            </div>
        </div>
      </div>
        
     );
    } 
}
 
export default CarDetails;