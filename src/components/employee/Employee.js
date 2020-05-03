import React, { Component } from 'react';
import axios from 'axios';

import EmployeeCard from './EmployeeCard';



class Employee extends Component {

    state = {
        employees: []
    }
    componentDidMount() {
        //get from EmployeeDB and hang on to that data; put it in state

        axios.get('http://localhost:5002/employees')
        .then((response) => {
            this.setState({
                employees: response.data,
            })
        })
    }

    deleteEmployee = id => {
        axios.delete('http://localhost:5002/employees/' + id).then(() => {
            axios.get('http://localhost:5002/employees')
            .then((response) => {
                this.setState({
                    employees: response.data,
                })
        })
        });     
    }

    render() {
        console.log(this.props)
        return ( 
         <React.Fragment>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {this.props.history.push("/employee/new")}}>
                    + Add Employee
                </button>
            </section>
                <div className="container-cards">
                {this.state.employees.map(employee => {
                    return <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    deleteEmployee={this.deleteEmployee}
                    {...this.props}
                
                    />
                }
                )}
                </div>
         </React.Fragment>  
        );
    } 
}
 
export default Employee;