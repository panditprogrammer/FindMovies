import React from 'react'

function Header() {
    return (

        <div className="container-fluid bg-primary">
            <div id="carouselExampleSlidesOnly" className="carousel slide position-relative" data-bs-ride="carousel">

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid mx-4">
                        <a className="navbar-brand" href="/">FindMovies</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">New Releases</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a href='/' className="nav-link">Sign Up</a>
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
                    <div className="row">
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <input type="search" className="form-control p-3 shadow" placeholder="Search your favourite movies, webseries" aria-label="Search your favourite movies, webseries" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <button className='btn btn w-100 btn-primary p-3 shadow'>Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header