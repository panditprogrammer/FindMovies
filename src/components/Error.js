import React from 'react'

function Error() {
    return (
        <div className='container Error d-flex justify-content-center align-items-center'>
            <div className="my-5 p-4">
                <h1 className="page404">404</h1>
                <p>Page Not Found!</p>
                <button className="btn btn-primary rounded-pill my-4">Back To Home</button>
            </div>
        </div>
    )
}

export default Error