import React, { useState, useEffect } from 'react';
import axios from './axios'


function Row({title}, fetchUrl) {
    const [movies, setMovies] = useState ([]);
    // using react hook {useEffect} to run code on a specific condition
    // empty[] bracket define that it runs once when row loads, without a reload
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData()
    }, [])
    return (
        <div>
            {/* title of Row */}
         <h2>{title}</h2>
            {/* wrapper contains film/tv poster image */}
        </div>
    )
}

export default Row;
;