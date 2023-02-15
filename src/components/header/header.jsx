import React from 'react'
import Navbar from '../navbar/navbar'
import SearchBar from '../searchbar/searchBar'
import './header.css'

const Header =({notHome})=>{
    return(
        <header className={notHome? "away-header": "header"}>
            <Navbar/>
         {notHome? "" :   <SearchBar/>}
        </header>
    )
}
export default Header