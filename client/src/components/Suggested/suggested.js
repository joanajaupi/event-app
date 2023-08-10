import React from 'react'
import './suggested.css'
import {TicketButton} from './TicketButton'
import {SuggestedTitle} from './title'
import {Date} from './date'
export const SuggestedCard = (props) => {
    return (
            <div className="suggestedEventCard">
                <div className="suggestedContent">
                    <Date date={props.date} />
                    <SuggestedTitle title={props.title} />
                    <TicketButton />
                </div>
            </div>
     
    )
}
