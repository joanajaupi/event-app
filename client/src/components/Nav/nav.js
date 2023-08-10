import React from 'react'
import './nav.css'

export const Nav = (props) => {


    return (
        <div className="nav">
            <h3 className = "nav-text">AppName</h3>
            <div className="nav-profile">
                <h3 className="nav-text" id="namee">{props.name}</h3>
                <img src={props.image} alt="profile" className="profile-image"/>
            </div>
        </div>
    )
}
