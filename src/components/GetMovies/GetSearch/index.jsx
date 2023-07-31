import React, {useState,useEffect} from 'react';
import "./style.css";
import { searchMovies} from '../../../utils/utilities';
import { useParams } from 'react-router-dom';

const GetSearch=()=>{
    const {query}=useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
      const searchResults=async()=>{
        const results=  await searchMovies(query)
        setSearchResults(results.results);
    };
    searchResults();

},[query]);
   return(
    <div className="search-movie">
            {searchResults.map((movie) => (
              <div key={movie.id} className="search-detail">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h5>{movie.title}</h5>
                <p>{movie.overview}</p>
              </div>
            ))}
          </div>
)
}
export default GetSearch;



