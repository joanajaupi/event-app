import React from 'react'
import Nav from './Nav/nav'
import SearchBar from './SearchBar/searchBar'
import SuggestedCard from './Suggested/suggested'
import './home.css'

const Home = () => {

     
    return (
        <div className="home">
            <Nav name="John Doe" image= "https://cdn.shopify.com/s/files/1/1045/8368/files/Person-with-curly-hair-resting-their-chin-on-their-hand-wearing-round-black-frame-eyeglasses.jpg?v=1654868072"/>
            <SearchBar />
            <p className="suggested-title">Suggested</p>
            <SuggestedCard />
        </div>
    )
}
export default Home;