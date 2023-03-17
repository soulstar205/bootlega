import React, { useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
import {Link} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

import './movie.css'

const Card = () => {
    const {movies, loading, error, name} = useContext(SearchContext)
    

  return (
      <div className='movie-row'>
        {loading && 
        <div className='loading'>
        <span className="movie-result">Loading... Please wait.</span>
          <ClipLoader
            color={"blue"}
            loading={loading}
            cssOverride={""}
            size={150}
            aria-label="Please wait..."
            data-testid="loader"
          />
        </div>
        }
      {!loading && error && <p className='error'>{error.message}</p> }
      {movies.length === 0 && !error && name && (
        <p className='error'>Sorry, no results were found for "{name}". Please try another search, or tweak your query.</p>
      )}
        {
            
        movies.map((data)=>( 
          <a href={data.link} target="_blank">
            <div className="card" key={data.index}>
              <div className="card-inner">
                <div className="card-image">
                    <img src={data.img} alt="" />
                </div>
                <div className="card-text">
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-description">{data.desc}</p>
                </div>
              </div>
            </div>
          </a>
        ))      
        }  
      </div>
  );
};

export default Card;
