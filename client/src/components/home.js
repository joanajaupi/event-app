import React from 'react'
import Nav from './Nav/nav'
import SearchBar from './SearchBar/searchBar'
import SuggestedCard from './Suggested/suggested'
import './home.css'
import FilterButtons from './upcoming-filter/filterButtons'
import EventCard from './eventCard/eventCard'
const Home = () => {

     
    return (
        <div className="home">
            <Nav name="John" image= "https://cdn.shopify.com/s/files/1/1045/8368/files/Person-with-curly-hair-resting-their-chin-on-their-hand-wearing-round-black-frame-eyeglasses.jpg?v=1654868072"/>
            <SearchBar />
            <p className="suggested-title">Suggested</p>
            <SuggestedCard />
            <p className="upcoming-title">Upcoming events</p>
            <div className="filter-bar">
                <FilterButtons name="All" />
                <FilterButtons name="Free" />
                <FilterButtons name="Limited" />
                <FilterButtons name="Concert" />
                <FilterButtons name="Festival" />
            </div>
            <p className="total-events">Total events: 150</p>
            <EventCard />
        </div>
    )
}
export default Home;