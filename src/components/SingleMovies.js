import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../Context'
import Footer from "./Footer"



function SingleMovie() {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState({})
    const navigate = useNavigate();

    const fetchMovie = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        // Debounce of fetchMovie function for preventing api call frequently
        let timeOut = setTimeout(() => {
            fetchMovie(API_URL + `&i=${id}`)
        }, 1000);

        return () => clearTimeout(timeOut)
    }, [id])


    if (isLoading) {
        return (
            <div id="siteLoader">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="container d-flex justify-content-center align-items-center flex-column mb-4">
                <div className="my-4 w-100">
                    <button onClick={() => navigate(-1)} className="btn btn-sm text-primary px-2 btn-light"> <i className="fa fa-arrow-left"></i> </button>
                </div>
                <div className="bg-white border rounded" style={{ "minWidth": "95%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={movie.Poster} className="img-fluid p-3" height={"auto"} width="100%" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="p-3">
                                {
                                    Object.keys(movie).map((value, index) => {
                                        if (typeof (movie[`${value}`]) !== 'object' && (value !== "Poster") && (value !== "Response")) {
                                            return (
                                                <p key={index} className="mb-2"> <strong>{value.toString()}</strong> : {movie[`${value.toString()}`]} </p>
                                            )
                                        } else {
                                            return "";
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default SingleMovie