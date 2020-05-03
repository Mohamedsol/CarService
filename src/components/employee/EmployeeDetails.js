
import React, {Component} from 'react';
import CarItem from '../cars/CarItem';
import axios from 'axios';

class EmployeeDetails extends Component {

    state = { 
        name:'',
        cars:[]
     }
    
    componentDidMount(){
        console.log("EmployeeDetail: ComponentDidMount");
        //use special _embed fetch call from jsonDB and hang on to the data; put it into state
        const employeeId = this.props.match.params.employeeId;
        axios.get(`http://localhost:5002/employees/${employeeId}/?_embed=cars`)
        .then((response) => {
            console.log(response.data)
          this.setState({
            name: response.data.name,
            cars: response.data.cars,
            loadingStatus: false
          });
        });
    }
    render() { 
        return ( 
            <div className="card " style={{ width: '1170px', marginLeft: '30px' }}>
                <div className="card-content" >
                <picture>
                    <img src={require('./employee.png')} alt="Employee" />
                </picture>
                    <h3>Employee: {this.state.name}</h3>
                    {/* <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Employee</button> */}
                    <h1 style={{ color: '#FF5498' }}> {`Cars that ${this.state.name} is working on :`}</h1>
                    <div className="container-cards">
                    {this.state.cars.map(car =>
                    <CarItem
                    id={car.id} 
                    model={car.model} 
                    image={car.image} 
                    description={car.description}
                    {...this.props}
                    />
                    )}
                    </div>
                </div>
            </div>
        );
         
    }
}
 
export default EmployeeDetails;