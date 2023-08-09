import React from 'react';
import './eventCard.css';


const PriceButton = (props) => {

    return (
        <div className="priceButton">
            <p className="price">{props.price}</p>
        </div>

    )
}
export default PriceButton;