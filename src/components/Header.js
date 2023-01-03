import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context'
import { menuItem } from "../DataRes"



function Header() {

    const { searchQuery, setSearchQuery, showError, setPage } = useGlobalContext();
    const [active, setActive] = useState(0)

    const SearchMovie = (e) => {
        if (e.keyCode === 13) {
            setSearchQuery(e.target.value)
            setPage(1)
        }
    }

    return (

        <div className="container-fluid bg-primary">
            <div id="carouselExampleSlidesOnly" className="carousel slide position-relative" data-bs-ride="carousel">

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid mx-4">
                        <Link className="navbar-brand text-primary fw-bold" to="/">FindMovies</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                {
                                    menuItem.map((item, index) => {
                                        return (
                                            <li className="nav-item" key={index}>
                                                <Link className={active === index ? "nav-link active" : "nav-link"} onClick={() => setActive(index)} aria-current="page" to={item.link}> {item.text} </Link>
                                            </li>
                                        )
                                    })
                                }
                                <li className="nav-item">
                                    <a href="http://panditprogrammer.com" target="_blank" rel="noopener noreferrer" className='nav-link'>Developer</a>
                                </li>
                                <li className="nav-item">
                                    <a href="http://omdbapi.com" target="_blank" rel="noopener noreferrer" className='nav-link'>API</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="carousel-inner opacity-50">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1200x200/?movie" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1200x200/?cinema" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1200x200/?film" className="d-block w-100" alt="..." />
                    </div>
                </div>

                <div className="container mt-5 position-absolute top-50 start-50 translate-middle">
                    <form method='GET' onSubmit={(e) => e.preventDefault()} className="row d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-10">
                            <div className="input-group shadow">
                                <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>

                                <input type="search" className="form-control p-3 border border-start-0" onBlur={(e) => e.target.value = searchQuery} onChange={(e) => e.target.value} onKeyDown={(e) => SearchMovie(e)} placeholder="Search your favourite movies, webseries and More" />
                            </div>
                        </div>
                    </form>
                    <p className='p-2 ps-0 text-danger'>{showError.show && showError.msg}</p>
                </div>

            </div>
        </div>
    )
}

export default Header