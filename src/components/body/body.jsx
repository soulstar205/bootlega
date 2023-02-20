import React, {useContext} from 'react'
import Card from '../movies/movieRow'
import {SearchContext} from '../../context/searchContext'
import Ads from '../ads/ads'
import './body.css'

const Body =()=>{
    const {movies, name} = useContext(SearchContext)
    console.log(movies)
    return(
        <div className="container body">
            <div className="body-inner">
                <span className="movie-result">
                    {
                        movies.length != 0  && <p>We found {movies.length} results for "{name}"</p>
                    }
                    
                    </span>
                <div className="body-left">
                    <Card/>
                    <Ads/>
                    <div data-clickadilla-banner="310934"></div>
                </div>

                {/* <div className="body-right">
                    
                </div> */}
            </div>
        </div>
    )
}
export default Body