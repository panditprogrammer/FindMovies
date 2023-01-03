import React from 'react'
import { useParams } from 'react-router-dom'

function SingleMovies() {

    const { id } = useParams()

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="card w-75 my-5" style={{"maxWidth":"600px"}}>
                <div className="row g-0">
                    <div className="col-md-4 d-sm-flex justify-content-center align-items-center">
                        <img src="https://source.unsplash.com/400x600/?movie" className="img-fluid p-3" height={"auto"} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title {id}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovies