import React from 'react';

import './Car.css'
import '../shared/NavBar.css'
import { Link } from 'react-router-dom'




const CarItem = props => {
    
    const { model, id, image, description, deleteCar } = props

    return (
        <div className="card" key={id}> 
            <div className='card-content'>
                <picture>
                   <img src={image} alt="car" /> 
                </picture>
                <h2>Model: <span className="card-carName">{model}</span></h2>
                <p>Description: {description}</p>
                <Link className="btn-details"
                to={`/car/${id}`}>Details</Link>
                <Link className="btn-details"
                to={`/car/${id}/edit`}>Edit</Link>
                <button className="btn-delete" onClick={() => deleteCar(id)}>Delete</button>
                
                </div>
            </div>
     );
}
 
export default CarItem;