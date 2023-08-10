import React from 'react';
import './icon.css'

export const Icon = (props) => {

    return (
        <div className="wrapper">
            <div className="circle">
                <i className={props.icon}></i>
            </div>
            
        </div>
    )
}