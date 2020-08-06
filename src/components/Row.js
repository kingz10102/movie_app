import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	// using react hook {useEffect} to run code on a specific condition
	// empty[] bracket define that it runs once when row loads, without a reload
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	// console.table(movies);
	// console.log(movies);
	const opts = {
		height: '390',
		width: '640',
		playerVars: {
		  // https://developers.google.com/youtube/player_parameters
		autoplay: 1,
		},
	};
	
	// when user clicks on movie if will either close all ready played trailer or search for open url trailer to play
	const handleClick = (movie) => {
		if(trailerUrl) {
			setTrailerUrl('');
		}else {
			movieTrailer(movie?.name || "")
			.then((url) => {
				//example:https://www.youtube.com/watch?v=wvH86lH3nto
				const urlParams = new URLSearchParams(new URL(url).search);
				setTrailerUrl(urlParams.get('v'))
			})
			.catch((err) => console.log(err));
		}
	};


	return (
		/* title of Row */
		<div className="row">
			<h2>{title}</h2>

			{/* wrapper contains film/tv poster image */}
			<div className="row__posters">
				{movies.map((movie) => (
					<img 
					key={movie.id}
					onClick={() => handleClick(movie)}
					className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
					src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
					alt={movie.name} />
				))}
			</div>
			{trailerUrl &&	<YouTube videoId={trailerUrl} opts={opts}/>}
		</div>
	);
}

export default Row;
