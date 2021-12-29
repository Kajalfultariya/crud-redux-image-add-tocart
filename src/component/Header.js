import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
   
    return (
        <div>
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
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/ChkBox">Check Box</NavLink>
                            </li>  
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/UImage">Image Zip</NavLink>
                            </li>        
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/About">Multiple Image Preview</NavLink>
                            </li>       
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/ImgUp">Single Image Download </NavLink>
                            </li>                           
                        </ul>

                    </div>
                </div>
               
            </div>
            
        </nav>
        
        <nav>
        <div className="sidenav" >
        <ul className="navbar-nav me-auto">
                         
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/WysiwygRteDraft">Wysiwyg Draft To HTML</NavLink>
                            </li>
                           
                            </ul>
    </div></nav>
    </div>
    )
}

export default Header;