import React, {useContext} from 'react'
import Card from '../movies/movieRow'
import {SearchContext} from '../../context/searchContext'
import { Meyo } from '../ads/meyo'
import { Verticals } from '../ads/verticals'
import {AdsterraVertical} from '../ads/verticals'
import Ads from '../ads/vast'
import {AdsHorizontal} from '../ads/ads'
// import {AdsterraHorizontal} from '../ads/ads'
import './body.css'

const Body =()=>{
    const {movies, name} = useContext(SearchContext)
    
    return(
        <div className="body">
                <section className="movie-result">
                    { 
                        movies.length != 0  && <p>We found {movies.length} results for "{name}"</p>
                    }

                </section>
            <section className="body-inner">
                <div className="body-left">
                    <Card/>
                    {/* <AdsterraHorizontal/> */}
                    <Meyo/>
                    <AdsHorizontal/>
                    {/* <div id="container-980ab69f0c912037141d7af1fddee000"></div> */}
                    
                </div>
                <div className="body-right">
                
                <div className="ads-veticals">
                {/* <AdsterraVertical/> */}
                <Ads/>
                <Verticals/>
                {/* <div data-clickadilla-banner="310700"></div> */}

                {/* <div data-clickadilla-banner="313306"></div> */}
                </div>
                </div>
            </section>
        </div>
    )
}
export default Body