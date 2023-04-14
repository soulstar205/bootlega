import React, {useContext} from 'react'
import Card from '../movies/movieRow'
import {SearchContext} from '../../context/searchContext'
import { Meyo } from '../ads/meyo'
import { Verticals } from '../ads/verticals'
import './body.css'

const Body =()=>{
    const {movies, name} = useContext(SearchContext)
    
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
                <Verticals/>
                <div data-clickadilla-banner="310700"></div>

                {/* <div data-clickadilla-banner="313306"></div> */}
                </div>
                </div>
            </section>
        </div>
    )
}
export default Body