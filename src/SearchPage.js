import React from 'react'
import './SearchPage.css'
import Button from './Button'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>
                    62 stays . 26 august to 30 august . 2 guest
                </p>
                <h1>Stays Nearby</h1>
                <Button name="Cancellation Flexibility" className="custom-btn"></Button>
                <Button name="Type of Place"></Button>
                <Button name="Price"></Button>
                <Button name="Rooms and Beds"></Button>
                <Button name="More Filter"></Button>
            </div>
        </div>
    )
}

export default SearchPage