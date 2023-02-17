import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const SearchContext = createContext()

export const SearchProvider = (props)=>{
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [error, setError] = useState({})
    

    const FetchFunction = async (props) => {
        setLoading(true)
        setName(props)
        try {
            let search = await axios.post(`https://bootlegga-backend-44mixyrgt-soulstar205.vercel.app/${props}`)     
            if(search){
                setMovies([...search.data.result])
                setLoading(false)
                setError(null)
            }else{
                setError('Movie not found, try a different search term')
                setLoading(false)
            }
        } catch (error) {
            setError(error)
            setLoading(false)
            console.log(error)
        }
    }
    
    return (
        <SearchContext.Provider value={{movies, loading, setLoading, FetchFunction, name, error}}>
            {props.children}
        </SearchContext.Provider>
    )
}