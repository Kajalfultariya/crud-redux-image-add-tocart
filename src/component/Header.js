import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Foody User</a>
            <div className="container">

                <div className="container-fluid">

                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/Login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/Home">All Records </NavLink>
                            </li>                          
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;