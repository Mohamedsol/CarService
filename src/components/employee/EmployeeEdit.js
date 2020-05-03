import React, {Component} from 'react';
import axios from 'axios';


class EmployeeEdit extends Component {
   
    state = { 
        employeeName: "",
        employeeId: "",
        loadingStatus: false
    };
     
    handleFieldChange = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    };

    componentDidMount(){
        const employeeId = this.props.match.params.employeeId;
        axios.get('http://localhost:5002/employees/' + employeeId).then(response => {
            this.setState({
                employeeName: response.data.name,
                employeeId: response.data.id
            })
        });
    }


    updateEmployee = e => {
        e.preventDefault();
        if( this.state.employeeName === ''){
           return window.alert('Please enter an employee name')
        } else {
            //disable the button while the Post request is running:
            this.setState({ loadingStatus: true });
            const updatedEmployee = {
                name: this.state.employeeName,
            };
            console.log('updatedEmployee',updatedEmployee)
            
            // Create (post request) the employee and redirect user to employee list
            axios.put('http://localhost:5002/employees/' + this.state.employeeId, updatedEmployee)
            .then( () => { this.props.history.push("/employee") })
         }
     
        
    }

    render() { 
        console.log(this.state.employeeId)
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
                        value={this.state.employeeName}
                        placeholder="Employee name"
                        />
                        <label htmlFor="employeeName">Name</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.updateEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            </> 
        );
    }
}
 
export default EmployeeEdit;