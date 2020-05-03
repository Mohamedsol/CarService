import React, { Component } from 'react';
import axios from 'axios';

class CarEdit extends Component {
    state = { 
        imageUrl: '',
        carModel: '',
        description:'',
        employeeId: '',
        employees:[],
        id:'',
        loadingStatus: false
        
     }

    componentDidMount() {
        this.Fetch();
        axios.get('http://localhost:5002/employees')
        .then((response) => {
            this.setState({
                employees: response.data,
            })
        })
    }

    Fetch() {
        const carId = this.props.match.params.carId;
        axios.get('http://localhost:5002/cars/'+ carId)
        .then((response) => {
            this.setState({
                imageUrl: response.data.image,
                carModel: response.data.model,
                description: response.data.description,
                employeeId: +response.data.employeeId,
                id: response.data.id
            })
        })
    }

    handleFieldChange = (e) => {
        const stateToChange= {};
        stateToChange[e.target.id] = e.target.value
        //the below function updates the state for every key press:
       this.setState(stateToChange)
       console.log(this.state)
    }

    UpdateCar = (e) => {
        e.preventDefault();
         if ( this.state.carModel === '' || this.state.description === '' || this.state.imageUrl === '') {
             window.alert('Please enter a car model and description')
         } else {
            //disable the button while the Post request is running:
            this.setState({ loadingStatus: true });
            const updateCar = {
                model: this.state.carModel,
                description: this.state.description,
                image: this.state.imageUrl,
                employeeId: Number(this.state.employeeId)
            };
            console.log('car update',updateCar)
            
            // Create (post request) the car and redirect user to car list
            axios.put('http://localhost:5002/cars/' + this.state.id, updateCar)
            .then( () => { this.props.history.push("/car") })
         }
     
    }

    render ( ) { 
        console.log(this.state)
        return ( 
           <>
                 <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                value={this.state.carModel}
                                id="carModel"
                                placeholder=" Car Model..."
                            />
                            <label htmlFor="carModel">Model</label>
                            <input
                                className='textarea'
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                value={this.state.description}
                                id="description"
                                placeholder=" Description" 
                            />
                            <label htmlFor="breed">Description</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange} 
                                value={this.state.imageUrl}
                                id="imageUrl"
                                placeholder=" Image URL" 
                            />
                            <label htmlFor="imageUrl">Image URL</label>
                                <select
                                    className="form-control"
                                    id="employeeId"
                                    value={this.state.employeeId}
                                    onChange={this.handleFieldChange} 
                                >
                                    {this.state.employees.map(employee =>
                                        <option key={employee.id} value={employee.id} id={employee.id}>
                                            {employee.name}
                                        </option> 
                                    )}
                                </select>
                            <label htmlFor="employee">Employee</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.UpdateCar}
                            >Submit</button> 
                        </div>
                    </fieldset>
                </form>
            </> 
        );
}
}
 
export default CarEdit;