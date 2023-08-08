import React from 'react'
import './nav.css'

const Nav = (props) => {


    return (
        <div className="nav">
            <h3 className = "nav-text">AppName</h3>
            <div className="nav-profile">
                <h3 className="nav-text">{props.name}</h3>
                <img src={props.image} alt="profile" class="profile-image"/>
            </div>
        </div>
    )
}
export default Nav;