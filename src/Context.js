import React, { useContext, useEffect, useState } from "react"

const AppContext = React.createContext()
const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`





// data for global access 
const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [showError, setShowError] = useState({ show: false, msg: "" })
    const [searchQuery, setSearchQuery] = useState("Robot")
    const [page, setPage] = useState(1)


    const fetchMovies = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                setIsLoading(false)
                setMovies(data.Search);
                setShowError({ show: false, msg: "" })
            } else {
                setShowError({ show: true, msg: data.Error })
            }

        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {

        // Debounce of fetchMovies function for preventing api call frequently
        let timeOut = setTimeout(() => {
            fetchMovies(API_URL + `&s=${searchQuery}&page=${page}`)
        }, 1000);

        return () => clearTimeout(timeOut)
    }, [searchQuery, page])



    return <AppContext.Provider value={{ isLoading, showError, movies, searchQuery, setSearchQuery, page, setPage }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext,API_URL }