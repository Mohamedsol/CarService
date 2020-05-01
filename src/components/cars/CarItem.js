import React from 'react';
import Card from '../shared/Card'


const CarItem = props => {
    
    const { model, color, id, image, description } = props

    return (
        <li> 
            <div className="card" key={id}>
                <div className="card-content">
                <picture>
                    <img src={image} alt="car" />
                </picture>
                <h2>Model: <span className="card-carName">{model}</span></h2>
                <small>{color}</small>
                <p>description: {description}</p>
                
                </div>
            </div>
        </li>
     );
}
 
export default CarItem;