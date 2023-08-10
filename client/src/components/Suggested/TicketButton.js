import React from 'react'
import {EventPage} from '../layouts/eventPage'
import {Link} from 'react-router-dom'

export const TicketButton = (props) => {

    const handleClick = () => {
        window.location.href = "/event";
    }

    return (
        <div className="ticketButton">
            <button className="ticketButton" onClick={handleClick}>Tickets</button>
        </div>

    )

}

