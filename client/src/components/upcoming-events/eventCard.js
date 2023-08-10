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
        <div className="eventCard" style={backgroundImage} onClick = {handleClick}>
            <div className="eventImage">
                <EventDate date={props.date} month={props.month} />
            </div>
                <PriceButton price={props.price} />
            <div className="overlay">
                <div className="eventCardContent">
                    <p className="eventArtist">{props.artist}</p>
                    <p className="eventLocation">{props.location}</p>
                </div>
            </div>
        </div>
    )
}
