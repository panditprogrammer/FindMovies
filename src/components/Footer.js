import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='footer container-fluid bg-dark pt-4'>
            <div className="container">
                <div className="row py-4 align-items-start ">
                    <div className="col-md-4 col-sm-6 col-xsm-12">
                        <h1 className="h4  text-white">Find Movie</h1>
                        <h1 className="h6 text-secondary">&copy; 2023</h1>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xsm-12">
                        <h1 className="h6 text-secondary">Developer</h1>
                            <a href="http://panditprogrammer.com" className='text-secondary d-block' target='_blank' rel="noopener noreferrer">PanditProgrammer.com</a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xsm-12">
                    <h1 className="h6 text-secondary">Quick Links</h1>
                        <Link to="/" className='text-secondary d-block my-2' rel="noopener noreferrer">Home</Link> 
                        <a href="http://omdbapi.com" className='text-secondary d-block my-2' target="_blank" rel="noopener noreferrer">API</a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xsm-12">
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer