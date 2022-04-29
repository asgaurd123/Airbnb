import React, { useState } from 'react'
import './Search.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import './Banner.css'
import { DateRangePicker } from "react-date-range"
import PeopleIcon from './PeopleIcon';


function Search() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of Guests
                <PeopleIcon />
            </h2>
            <input type="number" name="" id="" min={0} defaultValue={2} />
            <button className='btn'>Search Airbnb</button>
        </div>
    )
}

export default Search