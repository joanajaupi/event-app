import React from "react";
import "./filterButtons.css";
export const FilterButtons = (props) => {

    return (

        <div className="filterButtons">
            <a href="#" className="filterName">{props.name}</a>
        </div>

    )

}
