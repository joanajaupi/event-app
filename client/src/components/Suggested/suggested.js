import React from 'react'
import './suggested.css'
import TicketButton from './TicketButton'
import SuggestedTitle from './title'
import Date from './date'
const SuggestedCard = () => {
    return (
        <div className="suggested">
            <div className="suggestedEventCard">
                <div className="suggestedContent">
                    <Date date="Fri 25 Feb 2022" />
                    <SuggestedTitle title="Dave - We're all alone in this together UK tour 2022" />
                    <TicketButton />
                </div>
            </div>
            <div className="suggestedEventCard">
                <div className="suggestedContent">
                    <SuggestedTitle title="Dave - We're all alone in this together UK tour 2022" />
                    <TicketButton />
                </div>
            </div>
        </div>
    )
}
export default SuggestedCard;