import React, {useContext} from 'react'
import Card from '../movies/movieRow'
import {SearchContext} from '../../context/searchContext'
import { Meyo } from '../ads/meyo'
import './body.css'

const Body =()=>{
    const {movies, name} = useContext(SearchContext)
    console.log(movies)
    return(
        <div className="body">
                <span className="movie-result">
                    { 
                        movies.length != 0  && <p>We found {movies.length} results for "{name}"</p>
                    }

                </span>
            <section className="body-inner">
                <div className="body-left">
                    <Card/>
                    <Meyo/>
                    
                </div>
                <div className="body-right">
                
                <div className="ads-veticals">
                <div data-clickadilla-banner="310700"></div>

                {/* <div data-clickadilla-banner="313306"></div> */}
                </div>
                </div>
            </section>
        </div>
    )
}
export default Body