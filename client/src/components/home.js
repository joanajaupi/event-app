import React from 'react'
import {Nav} from './Nav/nav'
import {SearchBar} from './SearchBar/searchBar'
import {SuggestedCard} from './Suggested/suggested'
import './home.css'
import {FilterButtons} from './upcoming-filter/filterButtons'
import {EventCard} from './upcoming-events/eventCard'


export const Home = () => {
    const data = [
        {
            artist: "Dave",
            location: "Amsterdam Netherlands - 10:00 PM",
            date: "25",
            month: "Feb",
            price: "€ 25.00",
            image: "https://www.rollingstone.com/wp-content/uploads/2020/12/ArcticMonkeysRAHedits_highres_pcAaronParsons_7.jpg"
        },
        {
            artist: "Dave ",
            location: "Amsterdam Netherlands - 10:00 PM",
            date: "25",
            month: "Feb",
            price: "€ 25.00",
            image: "https://media.istockphoto.com/id/1330424071/photo/large-group-of-people-at-a-concert-party.jpg?s=612x612&w=0&k=20&c=LwdiOCBqbfICjQ3j5AzwyugxmfkbyfL3StKEQhtx4hE="

        },
        {
            artist: "Dave ",
            location: "Amsterdam Netherlands - 10:00 PM",
            date: "25",
            month: "Feb",
            price: "€ 25.00",
            image: "https://www.nme.com/wp-content/uploads/2022/08/Arctic-Monkeys-press.jpg"

        }

        ];
        const filters = 
        ["All", "Free", "Limited", "Concert", "Festival"];
     
    return (
        <div className="home">
            <Nav name="John" image= "https://cdn.shopify.com/s/files/1/1045/8368/files/Person-with-curly-hair-resting-their-chin-on-their-hand-wearing-round-black-frame-eyeglasses.jpg?v=1654868072"/>
            <SearchBar />
            <p className="suggested-title">Suggested</p>
            <div className="suggested">
                <SuggestedCard date="24 Feb - 19:30" title="Dave - we are alone in this together"/>
                <SuggestedCard date="24 Feb - 19:30" title="Dave - we are alone in this together" />
                <SuggestedCard date="24 Feb - 19:30" title="Dave - we are alone in this together" />

            </div>
            <p className="upcoming-title">Upcoming events</p>
            <div className="filter-bar">
            {
                    filters.map((item) => {
                        return (
                            // first button to be selected by default
                            item === "All" ? <FilterButtons name={item} selected="true" /> :
                            <FilterButtons name={item} />
                        )
                    }
                    )
                }
            </div>
            <p className="total-events">Total events: 150</p>
            {
                data.map((item) => {
                    return (
                        <EventCard artist={item.artist} location={item.location} date={item.date} month={item.month} price={item.price} image={item.image} />
                    )
                })
                
            }

        </div>
    )
}
