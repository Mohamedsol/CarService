import React from 'react';


const EmployeeCard = props => {
    const { employee, deleteEmployee } = props;
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.png')} alt="Employee" />
          </picture>
          <h5>Employee: <span className="card-employee">{employee.name}</span></h5>
          <button type="button"
            onClick={() => { props.history.push(`/employee/${employee.id}`) }}>Details</button>
          <button type="button" onClick={() => {props.history.push(`/employee/${employee.id}/edit`)}}>Edit</button>
          <button className="btn-delete" icon="trash-alt" type="button" onClick={() => deleteEmployee(employee.id)}>Delete </button>
        </div>
      </div>
    );
}
 
export default EmployeeCard;