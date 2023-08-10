import React from "react";
import "./eventDate.css";


export const EventDate = (props) => {

    return (
        <div className="eventDate">
            <p className="dateCirlce">{props.date}</p>
            <p className="month">{props.month}</p>
        </div>
    )
}

