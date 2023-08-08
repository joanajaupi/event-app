import React from "react";
import "./filterButtons.css";
const FilterButtons = (props) => {

    return (

        <div className="filterButtons">
            <a href="#" className="filterButton">{props.name}</a>
        </div>

    )

}
export default FilterButtons;