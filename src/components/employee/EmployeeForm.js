import React, {Component} from 'react';
import axios from 'axios';

class EmployeeForm extends Component {
    
    state = { 
        employeeName: "",
        loadingStatus: false
    };
     
    handleFieldChange = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    };

    constructNewEmployee = e => {
        e.preventDefault();
            //employeeName matches the key/value name from the state declared above in this component
            if (this.state.employeeName === "") {
                return window.alert("Please input an employee name");
            } else {
                this.setState({ loadingStatus: true })};
                const employee = {
                    //below "name" is same as JSON key/value pair
                    name: this.state.employeeName,
            };
            
        //Create new employee and redirect user to Employee List
        axios.post('http://localhost:5002/employees', employee)
        .then( () => { this.props.history.push("/employee") })    
    }
    render() { 
        return ( 
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        // id below has to match this component's state key/value name
                        id="employeeName"
                        placeholder="Employee name"
                        />
                        <label htmlFor="employeeName">Name</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
         );
    }
}
 
export default EmployeeForm;