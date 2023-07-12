import React, {useContext} from 'react'
import Card from '../movies/movieRow'
import {SearchContext} from '../../context/searchContext'
import { Meyo } from '../ads/meyo'
import { Verticals } from '../ads/verticals'
import AdsHorizontal from '../ads/ads'
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
                    <AdsHorizontal/>
                    <Card/>
                    <Meyo/>
                    {/* <div id="container-980ab69f0c912037141d7af1fddee000"></div> */}
                    
                </div>
                <div className="body-right">
                
                <div className="ads-veticals">
                <Verticals/>
                <iframe src="http://www.profitabledisplaynetwork.com/d29fd60cbf0d2b4bc7e71083250dd2a9" 
                        height="600px" 
                        width="160px">
                </iframe>
                {/* <div data-clickadilla-banner="310700"></div> */}

                {/* <div data-clickadilla-banner="313306"></div> */}
                </div>
                </div>
            </section>
        </div>
    )
}
export default Body