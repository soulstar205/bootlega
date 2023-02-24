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
                <span className="movie-result">
                    {
                        movies.length != 0  && <p>We found {movies.length} results for "{name}"</p>
                    }

                </span>
            <div className="body-inner">
                <div className="body-left">
                    <Card/>
                    <Ads/>
                    
                </div>
                <div className="body-right">
                <div data-clickadilla-banner="310934"></div>
                <div className="ads-veticals">
                <div data-clickadilla-banner="310700"></div>
                <div data-clickadilla-banner="313286"></div>

                {/* <div data-clickadilla-banner="313306"></div> */}
                </div>
                </div>
            </div>
        </div>
    )
}
export default Body