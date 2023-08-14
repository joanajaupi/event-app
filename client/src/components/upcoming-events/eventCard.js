import React from 'react';  
import './eventCard.css';
import {EventDate} from './eventDate';
import {PriceButton} from './price';

export const EventCard = (props) => {
    const handleClick = () => {
        window.location.href = "/event";
    }

    const backgroundImage = {
        backgroundImage: `url(${props.image})`
    }
    
    return (
        <div className="eventCard"  onClick = {handleClick}>
           
            <div className="upper-div" style={backgroundImage}>
            <EventDate date={props.date} month={props.month} />
            </div>
                <div className="eventCardContent">
                    <p className="eventArtist">{props.artist}</p>
                    <p className="eventLocation">{props.location}</p>
                </div>
                <PriceButton price={props.price} />
                
        </div>
    )
}
