import React, { useState } from 'react'
import './Banner.css'
import Search from './Search';
function Banner() {
    const [showSearch, setSearch] = useState(false);
    return (
        <div className='banner'>
            <div className="banner__search">
                {showSearch && <Search />}
                <button className="btn" onClick={() => setSearch(!showSearch)}>{showSearch ? "Hide" : "Search Dates"}</button>
            </div>
            <div className="banner__info">
                <h1>Get out there and strech your imagination</h1>
                <h5>Plan a diffrent type of gateway to uncover the hidden gems near you</h5>
                <button className="btn" >Explore Nearby</button>
            </div>

        </div>
    )
}

export default Banner