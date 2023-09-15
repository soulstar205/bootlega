import React, {useContext} from 'react'
import Navbar from '../navbar/navbar'
import SearchBar from '../searchbar/searchBar'
import { SearchContext } from '../../context/searchContext'
import ExternalLink from '../ads/smartlink'
import './header.css'

const Header =({notHome})=>{
    const {name} = useContext(SearchContext)
    return(
        <header className={notHome || name ? "away-header": "header"}>
            <Navbar/>
            <ExternalLink/>
         {notHome? "" :   <SearchBar/>}
        </header>
    )
}
export default Header