import React from 'react'
import {EventPage} from '../layouts/eventPage'

export const TicketButton = (props) => {

    const handleClick = () => {
        <EventPage image={props.image}/>
    }

    return (
        <div className="ticketButton">
            <button className="ticketButton" onClick={handleClick}>Tickets</button>
        </div>

    )

}

