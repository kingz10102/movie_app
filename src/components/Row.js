import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "./Row.css";

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);
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

	console.table(movies);
	console.log(movies);
	return (
		/* title of Row */
		<div className="row">
			<h2>{title}</h2>

			{/* wrapper contains film/tv poster image */}
			<div className="row__posters">
				{movies.map(movie => (
					<img className="row__poster" src={`${base_url}${movie.poster_path}`} alt={movie.name} />
				))}
			</div>
		</div>
	);
}

export default Row;
