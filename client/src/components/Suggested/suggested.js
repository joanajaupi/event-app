import React from 'react'
import './suggested.css'
import TicketButton from './TicketButton'
import SuggestedTitle from './title'
import Date from './date'
const SuggestedCard = () => {
    return (
        <div className="suggested">
            <div class="suggestedEventCard">
                <div class="backgroundOverlay"></div>
                    <div class="suggestedContent">
                        <Date date="Fri 25 Feb 2022"></Date>
                        <SuggestedTitle title="Dave - We're all alone in this together UK tour 2022"></SuggestedTitle>
                        <TicketButton></TicketButton>
                    </div>
            </div>

            <div class="suggestedEventCard">
                <div class="backgroundOverlay"></div>
                    <div class="suggestedContent">
                        <Date date="Fri 25 Feb 2022"></Date>
                        <SuggestedTitle title="Dave - We're all alone in this together UK tour 2022"></SuggestedTitle>
                        <TicketButton></TicketButton>
                    </div>
            </div>
        </div>
    )

}
export default SuggestedCard;