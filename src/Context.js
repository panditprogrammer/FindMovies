import React, { useContext, useEffect, useState } from "react"

const AppContext = React.createContext()
const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`





// data for global access 
const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [showError, setShowError] = useState({ show: false, msg: "" })


    const fetchMovies = async (url) => {

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                setIsLoading(false)
                setMovies(data.Search);
            } else {
                setShowError({ show: true, msg: data.error })
            }

        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {

        fetchMovies(API_URL)

    }, [])



    return <AppContext.Provider value={{ isLoading, showError, movies }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }