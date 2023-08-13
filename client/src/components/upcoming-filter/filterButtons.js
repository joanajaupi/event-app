import React from "react";
import "./filterButtons.css";
export const FilterButtons = (props) => {

    return (

        <div className="filterButtons">
            {
                props.selected === "true" ? <a href="#" className="autoselected filterName" selected>{props.name}</a> : 
                <a href="#" className="filterName">{props.name}</a>  }
            
        </div>

    )

}
