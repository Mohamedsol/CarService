import React from 'react';

import './Car.css'
import '../shared/NavBar.css'




const CarItem = props => {
    
    const { model, id, image, description, deleteCar } = props

    return (
        <div className="card"> 
            <div className='card-content' key={id}>
                <picture>
                   <img src={image} alt="car" /> 
                </picture>
                <h2>Model: <span className="card-carName">{model}</span></h2>
                <p>Description: {description}</p>
                <button className="btn-details">Details</button>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete" onClick={() => deleteCar(id)}>Delete</button>
                
                </div>
            </div>
     );
}
 
export default CarItem;