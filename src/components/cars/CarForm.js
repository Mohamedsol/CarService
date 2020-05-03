import React, {Component} from 'react';
import './CarForm.css';
import axios from 'axios'



class CarForm extends Component {
    
    state = { 
        imageUrl: '',
        carModel: '',
        description:'',
        employeeId: '',
        employees:[],
        loadingStatus: false
     }

     componentDidMount() {
        this.Fetch();
    }

    Fetch() {
        axios.get('http://localhost:5002/employees')
        .then((response) => {
            this.setState({
                employees: response.data,
                employeeId: response.data[0].id
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

     // create a car and post it to json server

     createCar = e => {
         e.preventDefault();
         if ( this.state.carModel === '' || this.state.description === '' || this.state.imageUrl === '') {
             window.alert('Please enter a car model and description')
         } else {
            //disable the button while the Post request is running:
            this.setState({ loadingStatus: true });
            const car = {
                model: this.state.carModel,
                description: this.state.description,
                image: this.state.imageUrl,
                employeeId: this.state.employeeId
            };
            // Create (post request) the car and redirect user to car list
            axios.post('http://localhost:5002/cars', car)
            .then( () => { this.props.history.push("/car") })
         }
     }
    
    render() { 
        console.log(this.state.employees, this.state.employeeId)
        return ( 
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="carModel"
                            placeholder=" Car Model..."
                        />
                        <label htmlFor="carModel">Model</label>
                        <input
                            className='textarea'
                            type="text"
                             required
                            onChange={this.handleFieldChange}
                            id="description"
                            placeholder=" Description" 
                        />
                        <label htmlFor="breed">Description</label>
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange} 
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
                            onClick={this.createCar}
                        >Submit</button> 
                    </div>
                </fieldset>
            </form>
        </>
         );
    }
}
 
export default CarForm;