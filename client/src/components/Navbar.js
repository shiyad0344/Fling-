import React from 'react'

function Navbar() {
    return (
        <div classNameName="header">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
                <div className="container">
                    <img className="navbar-brand" src ="https://images-ext-1.discordapp.net/external/uHmdNy-mfoFQQ0nejnf93IoATs6IdcXTznnviRhNN1k/https/i.postimg.cc/SRH3KSBv/Pics-Art-10-18-12-21-30.png?width=150&height=83"></img>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
               </div>
            </nav>           
        </div>
    );
}

export default Navbar;