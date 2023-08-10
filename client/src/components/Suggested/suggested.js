import React from 'react'
import './suggested.css'
import {TicketButton} from './TicketButton'
import {SuggestedTitle} from './title'
import {Date} from './date'
export const SuggestedCard = () => {
    return (
        
            <div className="suggestedEventCard">
                <div className="suggestedContent">
                    <Date date="Fri 25 Feb 2022" />
                    <SuggestedTitle title="Dave - We're all alone in this together UK tour 2022" />
                    <TicketButton onClick = {() => {
                        console.log('clicked');
                    }} />
                </div>
            </div>
     
    )
}
