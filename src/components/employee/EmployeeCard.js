import React, { Component } from 'react';
import axios from 'axios'


class EmployeeCard extends Component {
    state = {
        img:''
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?gender=male')
        .then((response) => {
            console.log(response.data)
            this.setState({
                img: response.data.results[0].picture.large
            })
        })
    }
    render(){
    const { employee, deleteEmployee } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.state.img} alt="Employee" />
          </picture>
          <h5>Employee: <span className="card-employee">{employee.name}</span></h5>
          <button type="button"
            onClick={() => { this.props.history.push(`/employee/${employee.id}`) }}>Details</button>
          <button type="button" onClick={() => {this.props.history.push(`/employee/${employee.id}/edit`)}}>Edit</button>
          <button className="btn-delete" icon="trash-alt" type="button" onClick={() => deleteEmployee(employee.id)}>Delete </button>
        </div>
      </div>
    );
    }
}
 
export default EmployeeCard;