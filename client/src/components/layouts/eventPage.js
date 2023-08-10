import React from 'react';
import './eventPage.css'
import {Icon} from '../icon/icon'
export const EventPage = () => {
    const backgroundImage = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/am.jpg'})`,
    }
    return (
        <div className="eventPage-container">
            <div className="eventPagediv1"  style={backgroundImage} >
            <div className="header">
            <Icon icon="fas fa-arrow-left" />
                <div className="eventPage-title">
                    <p>Dave</p>
                </div>
            </div>
            </div>
            <div className="event-details">
                    <div className="name-price">
                        <p className="event-name">Dave</p>
                        <div className="priceBtn">
                            <p className="price">45$</p>
                        </div>
                        
                    </div>
                    
                    <div className="date-time">
                        <Icon icon="far fa-calendar-alt" />
                        <div className="datee">
                        <p><strong>02</strong><br/>September</p>
                        </div>
                        <hr className="vertical-line"/>
                        <div className="time">
                        <p><strong>10:00PM</strong><br/>Thursday</p>
                        </div>
                    </div>
                    <div className="location">
                        <Icon icon="fas fa-map-marker-alt" />
                        <p>Amsterdam, Netherlands</p>
                    </div>
                    <div className="tickets">
                        <Icon icon="fas fa-ticket-alt" />
                        <p>5 tickets</p>
                    </div>
            </div>

            <div className="eventPagediv2">
                <div className="event-information">
                    <p className="about-event">
                        About event
                    </p>
                    <p className="about">
                    Lorem ipsum dolor sit amet. Ea nobis corporis ad fugiat culpa ut quibusdam soluta aut aliquid saepe. Est explicabo neque aut molestiae doloribus At fugiat ipsum non cupiditate soluta sed dolorem asperiores aut quia perferendis sed possimus officiis.
                    </p>
                    <button className="buy-ticket">
                        <i className="fas fa-ticket-alt"></i>
                        Tickets</button>
                </div>
            </div>
        </div>
    )
}


