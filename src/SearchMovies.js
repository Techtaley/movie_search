import React, { useState } from 'react'
import MovieCard from './MovieCard'

export default function SearchMovies() {
	const [query, setQuery] = useState('');  
	const [movies, getMovies] = useState([]);  

	const searchMovies = async (e) => {
		e.preventDefault();

		const url = `https://api.themoviedb.org/3/search/movie?api_key=0d1421f367805101c86113bdf60de880&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const response = await fetch(url);  //use react's fetch() function with url arg
			const data = await response.json(); //convert data from fetch call to json format
			getMovies(data.results); //pass to getMovies() to the data.results			
		} catch(err){   //if try doesn't work we need to handle error catch to display errors 
			console.log(err);
		}
	}

	return (
		<>	
			<form className='form' onSubmit={ searchMovies }>
				<label 
					className='label' 
					htmlFor='query'
				> Movie Name
				</label>

				<input 
					className='input' 
					type='text' 
					name='query' 
					onChange={(e)=> setQuery(e.target.value)}
					value={ query } 
					placeholder='i.e. Jurassic Park' 
				/>

				<button 
					className='button' 
					type='submit'>Search
				</button>
			</form>

			<div className='card--list'>
				{ movies.filter(movie => movie.poster_path).map(movie => (  //map brings all filter some
					<MovieCard movie={movie} key={movie.id}/ >					
				)) }
			</div>
		</>
	)
}

////App key(v2 auth): 0d1421f367805101c86113bdf60de880
//Example API Request: https://api.themoviedb.org/3/movie/550?api_key=0d1421f367805101c86113bdf60de880
//API Read Access Token (v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDE0MjFmMzY3ODA1MTAxYzg2MTEzYmRmNjBkZTg4MCIsInN1YiI6IjYwMDE5ZjA2NzM5MGMwMDAzZGY3NmRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.drcJNawRAkwyoYffx9IoacEoCC132MQ910QSQEdaGgo