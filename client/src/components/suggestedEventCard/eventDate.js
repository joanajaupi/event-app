import React from "react";
import "./eventDate.css";


const EventDate = (props) => {

    return (
        <div className="eventDate">
            <p className="dateCirlce">{props.date}</p>
            <p className="month">{props.month}</p>
        </div>
    )
}

export default EventDate;