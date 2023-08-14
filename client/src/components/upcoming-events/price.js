import React from 'react';
import './price.css';


export const PriceButton = (props) => {

    return (
        <div className="priceButton">
            <p className="price">{props.price}</p>
        </div>

    )
}
