import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import './HomePage.css'

function HomePage() {
    return (
        <div>
            <Navbar />

            <div
                className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center" >
                <div className="content text-center">
                    <h1 className="text-white">A Place Where You Find Your own Shadow.</h1>
                    <div className="fp justify-content-center align-items-center">
                        <div>
            <Link to='/login'>
                <button className=" btn btn-secondary w-100 d-flex justify-content-center align-items-center" >
                    Login
                </button>
            </Link>
            </div>

            

            <div className ="Dennis">
            
            <Link to='/register'>
                <button className="btn btn-secondary w-100 d-flex justify-content-center align-items-center" style={{marginTop: "10px"}}>
                    Sign Up
                </button>
            </Link>
            </div>
            </div>
                </div>
            </div>
            
        
        

    </div>
    )
}

export default HomePage;
