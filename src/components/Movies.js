import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context'


function Movies() {


    const { movies, page, setPage, isLoading } = useGlobalContext();

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
        <div className="container my-4">
            <div className="row gx-sm-1 gx-lg-2">

                {
                    movies.map((movie) => {
                        return (
                            <Link to={`/movie/${movie.imdbID}`} className="col-lg-3 col-md-4 col-sm-12 mt-4 text-decoration-none" key={movie.imdbID}>
                                <div className="card">
                                    <img src={movie.Poster} className="p-3" height="360px" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"> {movie.Title}</h5>
                                        <p className="card-text">{movie.Type} {movie.Year}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
            <div className="container my-4 py-2 text-center border-top">
                <button onClick={() => { page !== 1 ? setPage(page - 1) : setPage(page) }} className="btn btn-sm px-2 me-2 btn-light text-primary"> <i className="fa fa-arrow-left"></i> Prev</button>
                <button className="btn btn-sm px-2 me-2 btn-light text-primary active"> {page} </button>
                <button onClick={() => { setPage(page + 1) }} className="btn btn-sm px-2 ms-2 btn-light text-primary"> <i className="fa fa-arrow-right"></i> Next</button>
            </div>
        </div>
    )
}

export default Movies