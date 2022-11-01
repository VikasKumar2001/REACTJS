import {useEffect, useState} from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=ca18aa7'
const App=()=>{

  const [movies,setMovies]=useState([]);
  const [searchterm,setsearchterm]=useState('');

  const searchMovies= async (title) => {
    const response= await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();
    setMovies(data.Search);
  }
  useEffect(()=> {
    searchMovies('Guardians of the Galaxy Vol. 2');

  },[]);

  const movie1=
      {
          "Title": "Guardians of the Galaxy Vol. 2",
          "Year": "2017",
          "imdbID": "tt3896198",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
      }
  return <>
    <div className="app">
  <h1>MoviesTodays</h1>

  <div className="search">
  <input
    placeholder="Search for movies"
    value={searchterm}
    onChange={(e)=>setsearchterm(e.target.value)}
  />
  <img 
    src={SearchIcon}
    alt="SearchIcon"
    onClick={()=>searchMovies(searchterm)}
    
    />
  </div>
  {
    movies?.length >0
    ?(
      
  <div className="container">
    {movies.map((movie1)=>(
  <MovieCard movie1={movie1}/>
    ))
    }
 </div>

    ):(
      <div className="empty">
        <h2>No result found</h2>
        </div>
    )
  }

  <span>
    Created By Vikas
  </span>
  </div>
  </>;
}
export default App ;