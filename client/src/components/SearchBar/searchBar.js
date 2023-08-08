import React from 'react'
import './searchBar.css'
const SearchBar = () => {

    return (
        <div className="searchBar">
           <div>
                <i class="fa-solid fa-magnifying-glass search-icon"></i>            
                <input type="text" placeholder="Search all events..." class="search-input"></input>
           </div>
           <div id="filter-icon">
                <i class="fa-solid fa-sliders search-icon"></i>
           </div>
        </div>
    )
}

export default SearchBar;