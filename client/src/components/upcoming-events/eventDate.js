import React from "react";
import "./eventDate.css";


export const EventDate = (props) => {

    return (
        <div className="eventDate">
            <div className="dateCirlce">{props.date} </div>
            <div className="month">{props.month}</div>
        </div>
    )
}

