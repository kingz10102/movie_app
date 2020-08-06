import React, { useState } from 'react'


function Row({title}) {
    const [movies, setMovies] = useState ([]);
    
    
    return (
        <div>
            {/* title of Row */}
         <h2>{title}</h2>
            {/* wrapper contains film/tv poster image */}
        </div>
    )
}

export default Row
